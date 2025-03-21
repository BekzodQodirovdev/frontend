import { HttpException, Injectable } from '@nestjs/common';
import { CreateCartItemDto } from './dto/create-cart_item.dto';
import { UpdateCartItemDto } from './dto/update-cart_item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CartItem } from 'src/core/enttity/cart_item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CartItemService {
  constructor(
    @InjectRepository(CartItem)
    private readonly repository: Repository<CartItem>,
  ) {}

  async create(createCartItemDto: CreateCartItemDto) {
    const createPrd = this.repository.create(createCartItemDto);
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

  async update(id: string, updateCartItemDto: UpdateCartItemDto) {
    await this.findOne(id);
    await this.repository.update(id, {
      ...updateCartItemDto,
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
