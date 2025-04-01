import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from 'src/core/enttity/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly repository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    try {
      const existingCategory = await this.repository.findOne({
        where: { name: createCategoryDto.name },
      });

      if (existingCategory) {
        throw new HttpException(
          'Category with this name already exists',
          HttpStatus.CONFLICT,
        );
      }

      const newCategory = this.repository.create({
        ...createCategoryDto,
      });

      const savedCategory = await this.repository.save(newCategory);

      return {
        status: HttpStatus.CREATED,
        message: 'Category created successfully',
        data: savedCategory,
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Failed to create category',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll() {
    try {
      const categories = await this.repository.find({
        order: { name: 'ASC' },
      });

      return {
        status: HttpStatus.OK,
        message: 'Categories retrieved successfully',
        data: categories,
      };
    } catch (error) {
      throw new HttpException(
        'Failed to retrieve categories',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: string) {
    try {
      const category = await this.repository.findOne({
        where: { id },
      });

      if (!category) {
        throw new HttpException('Category not found', HttpStatus.NOT_FOUND);
      }

      return {
        status: HttpStatus.OK,
        message: 'Category retrieved successfully',
        data: category,
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Failed to retrieve category',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    try {
      await this.findOne(id);

      await this.repository.update(id, {
        ...updateCategoryDto,
        updated_at: new Date(),
      });

      const updatedCategory = await this.repository.findOne({ where: { id } });

      return {
        status: HttpStatus.OK,
        message: 'Category updated successfully',
        data: updatedCategory,
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Failed to update category',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(id: string) {
    try {
      await this.findOne(id);

      await this.repository.delete(id);

      return {
        status: HttpStatus.OK,
        message: 'Category deleted successfully',
        data: null,
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Failed to delete category',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
