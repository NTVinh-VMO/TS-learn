import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductService } from '../product-service/product-service.service';
import { CreateProductDto, UpdateProductDto } from '../product.decorator';

@Controller('product')
export class ProductController {
    constructor(private readonly ProductService: ProductService){}

    @Post()
    async add_product(
        @Body() createProductDto: CreateProductDto
    ){
        return await this.ProductService.add_product(createProductDto)
    }


    @Patch(':id')
    async update_product(
        @Param('id') id:string, @Body() updateProductDto: UpdateProductDto
    ){
        return await this.ProductService.update_product(id, updateProductDto)
    }

    @Get()
    async list_product(){
        return await this.ProductService.list_product()
    }

    @Get(':id')
    async product_detail(
        @Param('id') id: string
    ){
        return await this.ProductService.product_detail(id)
    }

    @Delete(':id')
    async delete_product(
        @Param('id') id: string
    ){
        await this.ProductService.delete_product(id)
        return {message: 'Deleted'}
    }
}
