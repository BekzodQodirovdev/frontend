import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from './user.entity';
import { BaseModel } from 'src/common/database';
import { OrderStatus } from 'src/common/enum/order.enum';
import { Cart } from './cart.entity';

@Entity('Orders')
export class Order extends BaseModel {
  @ManyToOne(() => User)
  user: User;

  @Column({ type: 'enum', enum: OrderStatus })
  status: OrderStatus;

  @OneToMany(() => Cart, (cart) => cart.order)
  cart: Cart[];
}
