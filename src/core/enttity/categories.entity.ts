import { BaseModel } from 'src/common/database';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'categories' })
export class Category extends BaseModel {
  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  tag: string;
}
