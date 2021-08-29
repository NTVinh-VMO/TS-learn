import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Product{
    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop()
    stock: number

    @Prop()
    style: string[]

    @Prop({default: null})
    createdBy: string

    @Prop({default: null})
    createdAt: Date

    @Prop({default: null})
    updateBy: string

    @Prop({default: null})
    updateAt: Date
}

export const ProductSchema = SchemaFactory.createForClass(Product)