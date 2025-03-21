import { BaseModel } from 'src/common/database';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User extends BaseModel {
  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  role: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({ unique: true })
  username: string;

  @Column({ type: 'date', nullable: true })
  birth_of_date: Date;

  @Column({ nullable: true })
  phone_number: string;

  @Column({ default: true })
  is_active: boolean;

  @Column({ type: 'timestamptz', nullable: true })
  last_login: Date;
}
