import { CreateRentalInput } from './create-rental.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateRentalInput extends PartialType(CreateRentalInput) {
  @Field(() => ID)
  _id: string;
}
