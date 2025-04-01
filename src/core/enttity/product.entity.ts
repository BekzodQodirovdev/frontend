import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { Category } from './category.entity';
import { OrderItem } from './order-item.entity';
import { BaseModel } from 'src/common/database';
import { ProductSizeE } from 'src/common/enum/productSize.enum';

@Entity()
export class Product extends BaseModel {
  @Column({ unique: true })
  sku: string;

  @Column()
  name: string;

  @Column({ type: 'text' })
  shortDescription: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'text', array: true })
  picture: string[];

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  salePrice: number;

  @Column({ default: 0 })
  stockQuantity: number;

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;

  @Column({ type: 'enum', enum: ProductSizeE, array: true })
  sizes: ProductSizeE[];

  @Column('text', { array: true })
  tags: string[];

  @OneToMany(() => OrderItem, (orderItem) => orderItem.product)
  orderItems: OrderItem[];
}
