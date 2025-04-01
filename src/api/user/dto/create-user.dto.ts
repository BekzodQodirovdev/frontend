import { IsString, IsEmail, IsOptional, IsDateString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  fullname: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  avatar?: string;

  @IsOptional()
  @IsDateString()
  birth_of_date?: Date;

  @IsOptional()
  @IsString()
  phone_number?: string;
}
