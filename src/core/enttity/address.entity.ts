import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { Order } from './order.entity';
import { BaseModel } from 'src/common/database';

@Entity()
export class Address extends BaseModel {
  @ManyToOne(() => User, (user) => user.addresses)
  user: User;

  @Column()
  country: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  streetAddress: string;

  @Column({ nullable: true })
  apartment: string;

  @Column()
  zipCode: string;

  @OneToMany(() => Order, (order) => order.billingAddress)
  billingOrders: Order[];

  @OneToMany(() => Order, (order) => order.shippingAddress)
  shippingOrders: Order[];
}
