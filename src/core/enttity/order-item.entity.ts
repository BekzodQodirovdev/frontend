import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Order } from './order.entity';
import { Product } from './product.entity';
import { BaseModel } from 'src/common/database';
import { ProductSizeE } from 'src/common/enum/productSize.enum';

@Entity()
export class OrderItem extends BaseModel {
  @ManyToOne(() => Order, (order) => order.items)
  order: Order;

  @ManyToOne(() => Product)
  product: Product;

  @Column()
  sku: string;

  @Column()
  productName: string;

  @Column()
  quantity: number;

  @Column({ nullable: true })
  price: number;

  @Column({ nullable: true })
  total: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  unitPrice: number;

  @Column({ type: 'enum', enum: ProductSizeE })
  size: ProductSizeE;
}
