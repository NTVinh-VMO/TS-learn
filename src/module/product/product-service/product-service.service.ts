import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto, UpdateProductDto } from '../product.decorator';
import { Product } from '../product.schema';

@Injectable()
export class ProductService {
    constructor(@InjectModel('Product') private ProductModel: Model<Product>){}

    async add_product(createProduct: CreateProductDto){
        const {name, description, stock, style} = createProduct;
        const created_at = new Date()
        const new_product = {
            name: name,
            description: description,
            stock: stock,
            style: style,
            createdAt: created_at
        }
        const create_product = new this.ProductModel(new_product)
        return create_product.save();
    }

    async update_product(id: string, updateProduct: UpdateProductDto){
        const {name, description, stock} = updateProduct;
        const update_at = new Date()
        const update_product = {
            name: name,
            description: description,
            stock: stock,
            // style: style[1],
            updateAt: update_at
        }
        return await this.ProductModel.findByIdAndUpdate(id, update_product, {new: true})    //findOneAndUpdate
    }

    async list_product(){
        return this.ProductModel.find().exec()
    }

    async product_detail(id: string){
        return this.ProductModel.findById(id)
    }

    async delete_product(id: string){
        await this.ProductModel.findByIdAndDelete(id)
    }
}
