import { IsEnum } from 'class-validator';
import { OrderStatus } from 'src/common/enum/order.enum';

export class CreateOrderDto {
  @IsEnum(OrderStatus)
  status: OrderStatus;
}
