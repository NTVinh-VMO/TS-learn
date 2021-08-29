import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Seller {
    @Prop()
    name: string

    @Prop()
    username: string

    @Prop()
    password: string

    @Prop()
    createdAt: Date
}

export const SellerSchema = SchemaFactory.createForClass(Seller)