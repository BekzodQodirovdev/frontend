import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { BaseModel } from 'src/common/database';

@Entity({ name: 'addresses' })
export class Address extends BaseModel {

  @ManyToOne(() => User, (user) => user.id, { onDelete: 'CASCADE' })
  user: User;

  @Column()
  title: string;

  @Column({ nullable: true })
  address_line_1: string;

  @Column({ nullable: true })
  address_line_2: string;

  @Column({ nullable: true })
  country: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  postal_code: string;

  @Column({ nullable: true })
  phone_number: string;

  @Column({ nullable: true })
  landmark: string;
}