import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class FindBookInput {
    @Field({ nullable: true })
    _id?: string;

    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    genre?: string;

    @Field({ nullable: true })
    publishedYear?: string;
}