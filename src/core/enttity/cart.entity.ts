import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { BaseModel } from 'src/common/database';
import { Order } from './order.entity';
import { Product } from './products.entity';

@Entity('Cart')
export class Cart extends BaseModel {
  @ManyToOne(() => Order, (order) => order.cart, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  cartItem: Order;

  @ManyToOne(() => Order, (order) => order.cart, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  order: Order;
}
