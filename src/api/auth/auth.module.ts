import { Module } from '@nestjs/common';
import { UserService } from './auth.service';
import { UserController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/core/enttity/user.entity';
import { BcryptManage } from 'src/infrastructure/bcrypt';
import { JwtModule } from '@nestjs/jwt';
import { EmailModule } from '../email/email.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({ global: true }),
    EmailModule,
  ],
  controllers: [UserController],
  providers: [UserService, BcryptManage],
})
export class AuthModule {}
