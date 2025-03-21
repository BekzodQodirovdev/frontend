import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Category } from './categories.entity';
import { BaseModel } from 'src/common/database';

@Entity({ name: 'products' })
export class Product extends BaseModel {
  @ManyToOne(() => Category, (category) => category.id, { onDelete: 'CASCADE' })
  category: Category;

  @Column()
  title: string;

  @Column({ nullable: true })
  picture: string;

  @Column({ nullable: true })
  summary: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column()
  price: number;

  @Column({ nullable: true })
  discount_type: string;

  @Column({ nullable: true })
  discount_value: number;

  @Column('text', { array: true, nullable: true })
  tags: string[];
}
