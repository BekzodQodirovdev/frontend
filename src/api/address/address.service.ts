import { HttpException, Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from 'src/core/enttity/address.entity';
import { Repository } from 'typeorm';
import { UpdateCategoryDto } from '../category/dto/update-category.dto';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address) private readonly repository: Repository<Address>,
  ) {}
  async create(createAddressDto: CreateAddressDto) {
    const createAddress = this.repository.create(createAddressDto);
    const saveAddress = await this.repository.save(createAddress);
    return {
      status_code: 201,
      message: 'success',
      saveAddress,
    };
  }

  async findAll() {
    try {
      const data = await this.repository.find();
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
    const data = await this.repository.findOne({ where: { id } });
    if (!data) {
      throw new HttpException('Not found', 404);
    }
    return {
      status_code: 200,
      message: 'success',
      data,
    };
  }

  async update(id: string, updateAddressDto: UpdateAddressDto) {
    await this.findOne(id);
    await this.repository.update(id, {
      ...UpdateCategoryDto,
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
