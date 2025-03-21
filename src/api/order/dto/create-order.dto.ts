import { IsEnum, IsUUID } from 'class-validator';
import { OrderStatus } from 'src/common/enum/order.enum';

export class CreateOrderDto {
  @IsUUID()
  userId: string;

  @IsEnum(OrderStatus)
  status: OrderStatus;
}
