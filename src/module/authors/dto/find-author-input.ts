import { InputType, Field } from "@nestjs/graphql";
import { SchemaFactory } from "@nestjs/mongoose";
import { Author } from "../entities/author.entity";


export const AuthorSchema = SchemaFactory.createForClass(Author);
@InputType()
export class FindAuthorInput {
    @Field({ nullable: true })
    _id?: string;

    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    email?: string;

    @Field({ nullable: true })
    contact?: string;

    @Field({ nullable: true })
    country?: string;
}