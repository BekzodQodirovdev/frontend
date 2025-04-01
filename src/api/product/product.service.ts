import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/core/enttity/product.entity';
import { Repository, Like, Between, MoreThanOrEqual } from 'typeorm';
import { PaginationDto } from './dto/pagination.dto';
import { ProductFilterDto } from './dto/product-filter.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly repository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    try {
      const existingProduct = await this.repository.findOne({
        where: { sku: createProductDto.sku },
      });

      if (existingProduct) {
        throw new HttpException(
          'Product with this SKU already exists',
          HttpStatus.CONFLICT,
        );
      }

      const newProduct = this.repository.create({
        ...createProductDto,
        created_at: new Date(),
        updated_at: new Date(),
      });

      const savedProduct = await this.repository.save(newProduct);

      return {
        status: HttpStatus.CREATED,
        message: 'Product created successfully',
        data: savedProduct,
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Failed to create product',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll(paginationDto?: PaginationDto, filterDto?: ProductFilterDto) {
    try {
      const page = paginationDto?.page || 1;
      const limit = paginationDto?.limit || 10;
      const skip = (page - 1) * limit;

      const where: any = {};

      if (filterDto) {
        if (filterDto.name) {
          where.name = Like(`%${filterDto.name}%`);
        }
        if (filterDto.categoryId) {
          where.categoryId = filterDto.categoryId;
        }
        if (filterDto.minPrice || filterDto.maxPrice) {
          where.price = Between(
            filterDto.minPrice || 0,
            filterDto.maxPrice || Number.MAX_SAFE_INTEGER,
          );
        }
        if (filterDto.inStock) {
          where.stockQuantity = MoreThanOrEqual(1);
        }
      }

      const [products, total] = await this.repository.findAndCount({
        where,
        skip,
        take: limit,
        order: { created_at: 'DESC' },
        relations: ['category'],
      });

      return {
        status: HttpStatus.OK,
        message: 'Products retrieved successfully',
        data: products,
        meta: {
          total,
          page,
          limit,
          total_pages: Math.ceil(total / limit),
        },
      };
    } catch (error) {
      console.log(error.message);

      throw new HttpException(
        'Failed to retrieve products',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: string) {
    try {
      const product = await this.repository.findOne({
        where: { id },
        relations: ['category'],
      });

      if (!product) {
        throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
      }

      return {
        status: HttpStatus.OK,
        message: 'Product retrieved successfully',
        data: product,
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Failed to retrieve product',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    try {
      await this.findOne(id);

      if (updateProductDto.sku) {
        throw new HttpException(
          'SKU cannot be updated',
          HttpStatus.BAD_REQUEST,
        );
      }

      await this.repository.update(id, {
        ...updateProductDto,
      });

      const updatedProduct = await this.repository.findOne({ where: { id } });

      return {
        status: HttpStatus.OK,
        message: 'Product updated successfully',
        data: updatedProduct,
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Failed to update product',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(id: string) {
    try {
      await this.findOne(id);

      await this.repository.softDelete(id);

      return {
        status: HttpStatus.OK,
        message: 'Product deleted successfully',
        data: null,
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Failed to delete product',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async searchByName(name: string, paginationDto?: PaginationDto) {
    try {
      const page = paginationDto?.page || 1;
      const limit = paginationDto?.limit || 10;
      const skip = (page - 1) * limit;

      const [products, total] = await this.repository.findAndCount({
        where: { name: Like(`%${name}%`) },
        skip,
        take: limit,
        relations: ['category'],
      });

      return {
        status: HttpStatus.OK,
        message: 'Products retrieved successfully',
        data: products,
        meta: {
          total,
          page,
          limit,
          total_pages: Math.ceil(total / limit),
        },
      };
    } catch (error) {
      throw new HttpException(
        'Failed to search products',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getProductsByCategory(
    categoryId: string,
    paginationDto?: PaginationDto,
  ) {
    try {
      const page = paginationDto?.page || 1;
      const limit = paginationDto?.limit || 10;
      const skip = (page - 1) * limit;

      const [products, total] = await this.repository.findAndCount({
        where: { category: { id: categoryId } },
        skip,
        take: limit,
        order: { created_at: 'DESC' },
        relations: ['category'],
      });

      return {
        status: HttpStatus.OK,
        message: 'Products retrieved successfully',
        data: products,
        meta: {
          total,
          page,
          limit,
          total_pages: Math.ceil(total / limit),
        },
      };
    } catch (error) {
      throw new HttpException(
        'Failed to get products by category',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getNewArrivals(limit = 10) {
    try {
      const products = await this.repository.find({
        order: { created_at: 'DESC' },
        take: limit,
        relations: ['category'],
      });

      return {
        status: HttpStatus.OK,
        message: 'New arrivals retrieved successfully',
        data: products,
      };
    } catch (error) {
      throw new HttpException(
        'Failed to get new arrivals',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
