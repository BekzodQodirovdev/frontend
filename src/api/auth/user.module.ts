import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/core/enttity/user.entity';
import { BcryptManage } from 'src/infrastructure/bcrypt';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({ global: true }),
  ],
  controllers: [UserController],
  providers: [UserService, BcryptManage],
})
export class AuthModule {}
