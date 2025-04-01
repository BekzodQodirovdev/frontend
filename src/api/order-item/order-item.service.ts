import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderItem } from 'src/core/enttity/order-item.entity';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { ProductService } from '../product/product.service';

@Injectable()
export class OrderItemService {
  constructor(
    @InjectRepository(OrderItem)
    private readonly orderItemRepository: Repository<OrderItem>,
    private readonly productService: ProductService,
  ) {}

  async create(createOrderItemDto: CreateOrderItemDto) {
    try {
      const product = await this.productService.findOne(
        createOrderItemDto.productId,
      );

      const newItem = this.orderItemRepository.create({
        ...createOrderItemDto,
        price: product.data.price,
        total: product.data.price * createOrderItemDto.quantity,
      });

      const savedItem = await this.orderItemRepository.save(newItem);

      return {
        status: HttpStatus.CREATED,
        message: 'Order item created successfully',
        data: savedItem,
      };
    } catch (error) {
      throw new HttpException(
        'Failed to create order item: ' + error.message,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findAll() {
    const items = await this.orderItemRepository.find({
      relations: ['product'],
    });

    return {
      status: HttpStatus.OK,
      message: 'Order items retrieved successfully',
      data: items,
      count: items.length,
    };
  }

  async findOne(id: string) {
    const item = await this.orderItemRepository.findOne({
      where: { id },
      relations: ['product'],
    });

    if (!item) {
      throw new HttpException('Order item not found', HttpStatus.NOT_FOUND);
    }

    return {
      status: HttpStatus.OK,
      message: 'Order item retrieved successfully',
      data: item,
    };
  }

  async update(id: string, updateOrderItemDto: any) {
    const item = await this.findOne(id);

    if (updateOrderItemDto.quantity) {
      updateOrderItemDto.total =
        item.data.product.price * updateOrderItemDto.quantity;
    }

    await this.orderItemRepository.update(id, {
      ...updateOrderItemDto,
    });

    return {
      status: HttpStatus.OK,
      message: 'Order item updated successfully',
    };
  }

  async remove(id: string) {
    await this.findOne(id);

    await this.orderItemRepository.delete(id);

    return {
      status: HttpStatus.OK,
      message: 'Order item deleted successfully',
    };
  }

  async getItemsForOrder(orderId: string) {
    const items = await this.orderItemRepository.find({
      where: { order: { id: orderId } },
      relations: ['product'],
    });

    return {
      status: HttpStatus.OK,
      message: 'Order items retrieved successfully',
      data: items,
      count: items.length,
    };
  }
}
