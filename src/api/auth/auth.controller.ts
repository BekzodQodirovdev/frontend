import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { loginDto } from './dto/loginDto.dto';

@Controller('auth')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/verify/:id')
  verify(@Param('id') id: string) {
    return this.userService.verify(id);
  }

  @Post('/register')
  register(@Body() createUserDto: CreateUserDto) {
    return this.userService.register(createUserDto);
  }

  @Post('/login')
  login(@Body() loginDto: loginDto) {
    return this.userService.login(loginDto);
  }
}
