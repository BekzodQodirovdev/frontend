import { HttpException, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/core/enttity/products.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly repository: Repository<Product>,
  ) {}
  async create(createProductDto: CreateProductDto) {
    const createPrd = this.repository.create(createProductDto);
    const saveProduct = await this.repository.save(createPrd);
    return {
      status_code: 201,
      message: 'success',
      data: saveProduct,
    };
  }

  async findAll() {
    try {
      const data = await this.repository.find();
      return {
        status_code: 200,
        message: 'success',
        data: data,
        data_length: data.length,
      };
    } catch (error) {
      console.error(error);
    }
  }

  async findOne(id: string) {
    const data = await this.repository.findOne({ where: { id } });
    if (!data) {
      throw new HttpException('Not found', 404);
    }
    return {
      status_code: 200,
      message: 'success',
      data,
    };
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    await this.findOne(id);
    await this.repository.update(id, {
      ...updateProductDto,
      updated_at: new Date(Date.now()),
    });
    return {
      status_code: 200,
      message: 'success',
      data: {},
    };
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.repository.delete(id);
    return {
      status_code: 200,
      message: 'success',
      data: {},
    };
  }
}
