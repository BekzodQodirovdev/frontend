import {
  IsString,
  IsOptional,
  IsNumber,
  IsPositive,
  IsInt,
  IsBoolean,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  picture?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsInt()
  @IsPositive()
  quentity: number;

  @IsBoolean()
  is_active: boolean;
}
