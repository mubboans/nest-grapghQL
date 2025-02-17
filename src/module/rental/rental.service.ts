import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateRentalInput } from './dto/create-rental.input';
import { UpdateRentalInput } from './dto/update-rental.input';
import { create } from 'src/core/db-functions/crud-db-functions';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Rental, RentalDocument } from './entities/rental.entity';

@Injectable()
export class RentalService {
    constructor(@InjectModel(Rental.name) private rentalModel: Model<RentalDocument>) {}
  async create(createRentalInput: CreateRentalInput): Promise<any | HttpException> {
    try {
      const rental = await create(this.rentalModel, createRentalInput);
      return rental;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  findAll() {
    return `This action returns all rental`;
  }

  findOne(id: string) {
    return `This action returns a #${id} rental`;
  }

  update(id: string, updateRentalInput: UpdateRentalInput) {
    return `This action updates a #${id} rental`;
  }

  remove(id: string) {
    return `This action removes a #${id} rental`;
  }
}
