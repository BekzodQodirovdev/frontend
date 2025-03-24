import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from '../config/index';
import { AuthModule } from './auth/user.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { CartModule } from './cart/cart.module';
import { CartItemModule } from './cart_item/cart_item.module';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: config.DB_HOST,
      port: +config.DB_PORT,
      username: config.DB_USER,
      password: config.DB_PASS,
      database: config.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
      entities: ['dist/core/entity/*.entity{.ts,.js}'],
    }),
    AuthModule,
    ProductModule,
    OrderModule,
    CartModule,
    CartItemModule,
    UploadModule
  ],
  providers: [],
})
export class AppModule {}
