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
    const currentUser = await this.repository.findOne({
      where: { email: createUserDto.email },
    });
    if (currentUser) {
      throw new BadRequestException('Email already exist!');
    }
    const hashPassword = await this.bcryptManage.createBcryptPassword(
      createUserDto.password,
    );
    createUserDto.password = hashPassword;
    const create_user = this.repository.create(createUserDto);
    const { password, ...newUser } = await this.repository.save(create_user);
    return {
      status_code: 201,
      message: 'success',
      data: newUser,
    };
  }
  async login(loginDto: loginDto) {
    const user = await this.repository.findOne({
      where: { email: loginDto.email },
    });
    if (!user) {
      throw new BadRequestException('login or password is wrong');
    }
    const isMatch = await this.bcryptManage.comparePassword(
      loginDto.password,
      user.password,
    );
    if (!user) {
      throw new BadRequestException('login or password is wrong');
    }
    if (!user.is_active) {
      throw new ForbiddenException(`You are inactive`);
    }

    const payload = {
      sub: user.id,
      login: user.email,
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
  }
}
