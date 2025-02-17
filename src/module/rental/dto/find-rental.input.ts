import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class FindRentalInput {
    @Field({ nullable: true })
    _id: string;

    @Field({ nullable: true })
    dateRented: Date;
}
