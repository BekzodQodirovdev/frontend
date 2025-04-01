import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from '../config/index';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { UploadModule } from './upload/upload.module';
import { UserModule } from './user/user.module';
import { EmailModule } from './email/email.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { AddressModule } from './address/address.module';
import { CategoryModule } from './category/category.module';
import { OrderItemModule } from './order-item/order-item.module';

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
    MailerModule.forRoot({
      transport: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      },
      defaults: {
        from: process.env.SMTP_USER,
      },
    }),
    AuthModule,
    ProductModule,
    OrderModule,
    UploadModule,
    UserModule,
    EmailModule,
    AddressModule,
    CategoryModule,
    OrderItemModule,
  ],
  providers: [],
})
export class AppModule {}
