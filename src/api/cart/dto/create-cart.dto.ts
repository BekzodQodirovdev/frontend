import { IsUUID } from 'class-validator';

export class CreateCartDto {
  @IsUUID()
  cartItemId: string;

  @IsUUID()
  orderId: string;
}
