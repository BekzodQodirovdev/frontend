import { HttpException, Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from 'src/core/enttity/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly repository: Repository<User>,
  ) {}

  async findAll() {
    try {
      const data = await this.repository.find({
        select: {
          id: true,
          fullname: true,
          phone_number: true,
          email: true,
          avatar: true,
          birth_of_date: true,
          is_active: true,
          role: true,
          created_at: true,
          updated_at: true,
          orders: true,
        },
      });
      return {
        status_code: 200,
        message: 'success',
        data: data,
        data_length: data.length,
      };
    } catch (error) {
      console.error(error);
    }
  }

  async findOne(id: string) {
    const data = await this.repository.findOne({
      where: { id },
      select: {
        id: true,
        fullname: true,
        phone_number: true,
        email: true,
        avatar: true,
        birth_of_date: true,
        is_active: true,
        role: true,
        created_at: true,
        updated_at: true,
        orders: true,
      },
    });
    if (!data) {
      throw new HttpException('Not found', 404);
    }
    return {
      status_code: 200,
      message: 'success',
      data,
    };
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    await this.findOne(id);
    await this.repository.update(id, {
      ...updateUserDto,
      updated_at: new Date(Date.now()),
    });
    return {
      status_code: 200,
      message: 'success',
      data: {},
    };
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.repository.delete(id);
    return {
      status_code: 200,
      message: 'success',
      data: {},
    };
  }
}
