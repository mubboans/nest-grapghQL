import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateAuthorInput {

    @Field()
    name: string;

    @Field()
    email: string;

    @Field()
    contact: string;

    @Field()
    country: string;

}


