import { InputType, Int, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateRentalInput {
    @Field({ nullable: true })
    dateRented?: Date;

    @Field({ nullable: true })
    userId?: string;

    @Field(() => [ID], { description: 'Array of book IDs for rental' })
    bookIds: string[];
}
