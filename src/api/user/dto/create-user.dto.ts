import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsBoolean,
  IsDate,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  role: string;

  @IsOptional()
  @IsString()
  avatar?: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsOptional()
  @IsDate()
  birth_of_date?: Date;

  @IsOptional()
  @IsString()
  phone_number?: string;

  @IsBoolean()
  is_active: boolean;
}
