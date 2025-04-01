import { Module } from '@nestjs/common';
import { OrderItemService } from './order-item.service';
import { OrderItemController } from './order-item.controller';
import { OrderItem } from 'src/core/enttity/order-item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from '../product/product.module';

@Module({
  imports: [TypeOrmModule.forFeature([OrderItem]), ProductModule],
  controllers: [OrderItemController],
  providers: [OrderItemService],
})
export class OrderItemModule {}
