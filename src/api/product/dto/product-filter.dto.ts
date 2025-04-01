import { IsOptional, IsNumber, Min, Max } from 'class-validator';

export class ProductFilterDto {
  @IsOptional()
  name?: string;

  @IsOptional()
  @IsNumber()
  categoryId?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  minPrice?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  maxPrice?: number;

  @IsOptional()
  inStock?: boolean;
}