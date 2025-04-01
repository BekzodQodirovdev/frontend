import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsOptional,
  IsArray,
  IsUUID,
  IsEnum,
} from 'class-validator';
import { ProductSizeE } from 'src/common/enum/productSize.enum';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  sku: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  shortDescription: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsOptional()
  @IsNumber()
  stockQuantity?: number;

  @IsNotEmpty()
  @IsUUID()
  categoryId: string;

  @IsArray()
  @IsEnum(ProductSizeE, { each: true })
  sizes: ProductSizeE[];

  @IsArray()
  @IsString({ each: true })
  tags: string[];

  @IsArray()
  @IsString({ each: true })
  picture: string[];
}
