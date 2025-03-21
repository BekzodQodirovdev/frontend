import { IsInt, IsPositive, IsUUID } from 'class-validator';

export class CreateCartItemDto {
  @IsUUID()
  productId: string;

  @IsInt()
  @IsPositive()
  quentity: number;
}
