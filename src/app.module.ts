import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './module/product/product.module';
import { SellerModule } from './module/seller/seller.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/product'),
    ProductModule,
    SellerModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
