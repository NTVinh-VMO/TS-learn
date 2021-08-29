import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { JWTConst } from './const';
import { SellerController } from './seller-controller/seller-controller.controller';
import { SellerService } from './seller-service/seller-service.service';
import { Seller, SellerSchema } from './seller.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{name: Seller.name, schema: SellerSchema}]),
    JwtModule.register({
      secret: JWTConst.secret,
      signOptions: {expiresIn: '24h'}
    })],
  controllers: [SellerController],
  providers: [SellerService]
})
export class SellerModule {}
