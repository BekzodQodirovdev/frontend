import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from '../config/index';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { AddressModule } from './address/address.module';

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
    UserModule,
    ProductModule,
    CategoryModule,
    AddressModule,
  ],
  providers: [],
})
export class AppModule {}
