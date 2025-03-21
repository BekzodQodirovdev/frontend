import { HttpException, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/core/enttity/categories.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly repository: Repository<Category>,
  ) {}
  async create(createCategoryDto: CreateCategoryDto) {
    const createCategory = this.repository.create(createCategoryDto);
    const saveCategory = await this.repository.save(createCategory);
    return {
      status_code: 201,
      message: 'success',
      saveCategory,
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

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    await this.findOne(id);
    await this.repository.update(id, {
      ...updateCategoryDto,
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
