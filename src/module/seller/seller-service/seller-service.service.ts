import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSellerDto, LoginSellerDto } from '../seller.decorator';
import { Seller } from '../seller.schema';
import * as bcrypt from 'bcrypt'

@Injectable()
export class SellerService {
    constructor(@InjectModel('Seller') private sellerModel: Model<Seller>, private jwtService: JwtService) { }
    async register(createSeller: CreateSellerDto) {
        const { name, username, password } = createSeller
        const findSeller = await this.sellerModel.findOne({ username: username })
        if (findSeller) {
            throw new HttpException('Username existed', HttpStatus.BAD_REQUEST)
        } else {
            const salt = 10;
            const newSeller = {
                name: name,
                username: username,
                password: bcrypt.hashSync(password, salt)
            }
            const sellerAdded = new this.sellerModel(newSeller);
            return sellerAdded.save();
        }
    }
    async login(loginSeller: LoginSellerDto) {
        const { username, password } = loginSeller
        const findSeller = await this.sellerModel.findOne({ username: username })
        if(!findSeller || !bcrypt.compareSync(password, findSeller.password)){
            throw new HttpException('Invalid username or password',HttpStatus.UNAUTHORIZED)
        }else{
            return this.jwtService.signAsync({_id:findSeller._id})
        }
    }
}
