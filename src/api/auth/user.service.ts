import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/core/enttity/user.entity';
import { Repository } from 'typeorm';
import { BcryptManage } from 'src/infrastructure/bcrypt';
import { JwtService } from '@nestjs/jwt';
import { loginDto } from './dto/loginDto.dto';
import { config } from 'src/config';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
    private readonly bcryptManage: BcryptManage,
    private readonly jwtService: JwtService,
  ) {}

  async register(createUserDto: CreateUserDto) {
    try {
      const currentUser = await this.repository.findOne({
        where: { email: createUserDto.email },
      });

      if (currentUser) {
        throw new BadRequestException('Email already exists!');
      }

      createUserDto.password = await this.bcryptManage.createBcryptPassword(
        createUserDto.password,
      );

      const createdUser = this.repository.create(createUserDto);
      const { password, ...newUser } = await this.repository.save(createdUser);

      return {
        status_code: 201,
        message: 'Success',
        data: newUser,
      };
    } catch (error) {
      console.error('Register Error:', error);
      throw new BadRequestException(error.message || 'Something went wrong');
    }
  }

  async login(loginDto: loginDto) {
    try {
      const user = await this.repository.findOne({
        where: { email: loginDto.email },
      });

      if (!user) {
        throw new BadRequestException('Login or password is wrong');
      }

      const isMatch = await this.bcryptManage.comparePassword(
        loginDto.password,
        user.password,
      );

      if (!isMatch) {
        throw new BadRequestException('Login or password is wrong');
      }

      if (!user.is_active) {
        throw new ForbiddenException(`You are inactive`);
      }

      const payload = {
        sub: user.id,
        login: user.email,
        role: user.role,
        is_active: user.is_active,
      };

      const accessToken = this.jwtService.sign(payload, {
        secret: config.ACCESS_TOKEN_KEY,
        expiresIn: config.ACCESS_TOKEN_TIME,
      });

      const refreshToken = this.jwtService.sign(payload, {
        secret: config.REFRESH_TOKEN_KEY,
        expiresIn: config.REFRESH_TOKEN_TIME,
      });

      const { password, ...store } = user;

      return {
        accessToken,
        refreshToken,
        store,
      };
    } catch (error) {
      console.error('Login Error:', error);
      throw new BadRequestException(error.message || 'Something went wrong');
    }
  }
}
