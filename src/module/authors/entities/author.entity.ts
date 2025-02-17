import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

export type AuthorDocument = Author & mongoose.Document;

@Schema({ timestamps: true })
@ObjectType()
export class Author {

    @Field(() => ID)
    _id: string;

    @Field()
    @Prop()
    name: string;

    @Field()
    @Prop()
    email: string;

    @Field()
    @Prop()
    contact: string;

    @Field()
    @Prop()
    country: string;


    @Prop()
    @Field()
    createdAt: Date;

    @Prop()
    @Field()
    updatedAt: Date;

}

export const AuthorSchema = SchemaFactory.createForClass(Author); 