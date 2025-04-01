import { IsString } from 'class-validator';

export class CreateAddressDto {
  @IsString()
  country: string;

  @IsString()
  state: string;

  @IsString()
  city: string;

  @IsString()
  streetAddress: string;

  @IsString()
  apartment: string;

  @IsString()
  zipCode: string;
}
