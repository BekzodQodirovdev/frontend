import { BaseModel } from 'src/common/database';
import { UserRole } from 'src/common/enum/user.enum';
import { Entity, Column, OneToMany } from 'typeorm';
import { Order } from './order.entity';
import { Address } from './address.entity';

@Entity({ name: 'users' })
export class User extends BaseModel {
  @Column()
  fullname: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
  role: UserRole;

  @Column({ nullable: true })
  avatar: string;

  @Column({ type: 'date', nullable: true })
  birth_of_date: Date;

  @Column({ nullable: true })
  phone_number: string;

  @Column({ default: false })
  is_active: boolean;

  @Column({ nullable: true })
  refresh_token: string;

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];

  @OneToMany(() => Address, (address) => address.user)
  addresses: Address[];
}
