import {
  Entity,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { User } from './user.entity';
import { Address } from './address.entity';
import { OrderItem } from './order-item.entity';
import { BaseModel } from 'src/common/database';

export enum PaymentMethod {
  PayPal = 'PayPal',
  VISA = 'VISA',
  BankTransfer = 'Bank Transfer',
  CashOnDelivery = 'Cash on Delivery',
}

export enum OrderStatus {
  Processing = 'Processing',
  Shipped = 'Shipped',
  Delivered = 'Delivered',
  Cancelled = 'Cancelled',
}

@Entity()
export class Order extends BaseModel {
  @ManyToOne(() => User, (user) => user.orders)
  user: User;

  @Column({ unique: true })
  orderNumber: string;

  @CreateDateColumn()
  orderDate: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  subtotal: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  shippingFee: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  totalAmount: number;

  @Column({ type: 'enum', enum: PaymentMethod })
  paymentMethod: PaymentMethod;

  @ManyToOne(() => Address)
  billingAddress: Address;

  @ManyToOne(() => Address, { nullable: true })
  shippingAddress: Address;

  @Column({ type: 'enum', enum: OrderStatus, default: OrderStatus.Processing })
  orderStatus: OrderStatus;

  @Column({ type: 'text', nullable: true })
  notes: string;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
  items: OrderItem[];
}
