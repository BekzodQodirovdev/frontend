import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { BaseModel } from 'src/common/database';
import { Order } from './order.entity';
import { Product } from './products.entity';

@Entity('CartItem')
export class CartItem extends BaseModel {
  @ManyToOne(() => Product, (product) => product.cartItem, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  product: Product;

  @Column()
  quentity: number;
}
