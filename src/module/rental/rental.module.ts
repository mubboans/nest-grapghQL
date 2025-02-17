import { Module } from '@nestjs/common';
import { RentalService } from './rental.service';
import { RentalResolver } from './rental.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Rental, RentalSchema } from './entities/rental.entity';

@Module({
  providers: [RentalResolver, RentalService],
  imports: [
    MongooseModule.forFeature([{ name: Rental.name, schema: RentalSchema }]),
  ],
})
export class RentalModule {}
