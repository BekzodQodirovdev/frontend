import {
  IsString,
  IsEmail,
  IsOptional,
  IsBoolean,
  IsEnum,
  IsDateString,
} from 'class-validator';
import { UserRole } from 'src/common/enum/user.enum';

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
