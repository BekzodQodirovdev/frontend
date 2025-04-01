import { Entity, Column, OneToMany } from 'typeorm';
import { Product } from './product.entity';
import { BaseModel } from 'src/common/database';

@Entity()
export class Category extends BaseModel {
  @Column({ nullable: false })
  name: string;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
