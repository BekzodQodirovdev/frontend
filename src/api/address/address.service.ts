import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from 'src/core/enttity/address.entity';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { PaginationDto } from '../product/dto/pagination.dto';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private readonly repository: Repository<Address>,
  ) {}

  async create(createAddressDto: CreateAddressDto) {
    try {
      const newAddress = this.repository.create({
        ...createAddressDto,
        created_at: new Date(),
        updated_at: new Date()
      });
      const savedAddress = await this.repository.save(newAddress);
      return {
        status: HttpStatus.CREATED,
        message: 'Address created successfully',
        data: savedAddress,
      };
    } catch (error) {
      throw new HttpException(
        'Failed to create address',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async findAll(paginationDto?: PaginationDto, userId?: string) {
    try {
      const { page = 1, limit = 10 } = paginationDto || {};
      const skip = (page - 1) * limit;

      const where = userId ? { user: { id: userId } } : {};

      const [addresses, total] = await this.repository.findAndCount({
        where,
        skip,
        take: limit,
        relations: ['user']
      });

      return {
        status: HttpStatus.OK,
        message: 'Addresses retrieved successfully',
        data: addresses,
        meta: {
          total,
          page,
          limit,
          total_pages: Math.ceil(total / limit),
        },
      };
    } catch (error) {
      throw new HttpException(
        'Failed to retrieve addresses',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async findOne(id: string) {
    try {
      const address = await this.repository.findOne({
        where: { id },
        relations: ['user']
      });

      if (!address) {
        throw new HttpException(
          'Address not found',
          HttpStatus.NOT_FOUND
        );
      }

      return {
        status: HttpStatus.OK,
        message: 'Address retrieved successfully',
        data: address,
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Failed to retrieve address',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async update(id: string, updateAddressDto: UpdateAddressDto) {
    try {
      await this.findOne(id); // Check if exists
      await this.repository.update(id, {
        ...updateAddressDto,
        updated_at: new Date()
      });
      const updatedAddress = await this.repository.findOne({ where: { id } });
      return {
        status: HttpStatus.OK,
        message: 'Address updated successfully',
        data: updatedAddress,
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Failed to update address',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async remove(id: string) {
    try {
      await this.findOne(id); // Check if exists
      await this.repository.softDelete(id);
      return {
        status: HttpStatus.OK,
        message: 'Address deleted successfully',
        data: null,
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Failed to delete address',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async setDefaultAddress(userId: string, addressId: string) {
    try {
      // Reset all addresses to non-default first
      await this.repository.update(
        { user: { id: userId } },
        { isDefault: false }
      );

      // Set the selected address as default
      await this.repository.update(
        { id: addressId, user: { id: userId } },
        { isDefault: true }
      );

      return {
        status: HttpStatus.OK,
        message: 'Default address set successfully',
        data: null,
      };
    } catch (error) {
      throw new HttpException(
        'Failed to set default address',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}