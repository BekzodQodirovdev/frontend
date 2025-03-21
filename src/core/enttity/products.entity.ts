import {
  Entity,
  Column,
  OneToMany,
} from 'typeorm';
import { BaseModel } from 'src/common/database';
import { CartItem } from './cart_item.entity';

@Entity({ name: 'products' })
export class Product extends BaseModel {
  @Column()
  name: string;

  @Column({ nullable: true })
  picture: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column()
  price: number;

  @Column()
  quentity: number;

  @Column()
  is_active: boolean;

  @OneToMany(() => CartItem, (cartItem) => cartItem.product)
  cartItem: CartItem[];
}
