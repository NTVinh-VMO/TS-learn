import { Body, Controller, Post } from '@nestjs/common';
import { SellerService } from '../seller-service/seller-service.service';
import { CreateSellerDto, LoginSellerDto } from '../seller.decorator';

@Controller('seller')
export class SellerController {
    constructor(private readonly sellerService: SellerService){}

    @Post('register')
    async register(
        @Body() createSeller: CreateSellerDto
    ){
        return await this.sellerService.register(createSeller)
    }

    @Post('login')
    async login(
        @Body() loginSeller: LoginSellerDto
    ){
        return await this.sellerService.login(loginSeller)
    }
}
