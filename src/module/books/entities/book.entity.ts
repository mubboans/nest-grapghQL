import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Author } from 'src/module/authors/entities/author.entity';

export type BookDocument = Book & mongoose.Document ; 

@Schema({ timestamps: true })
@ObjectType()
export class Book {
    @Field(() => ID)
    _id: number;

    @Prop()
    @Field()
    name: string;

    @Prop()
    @Field()
    genre: string;

    @Prop()
    @Field()
    publishedYear: string;


    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Author' }] })
    @Field(() => [Author])
    authorIds: Author[];

    @Prop()
    @Field()
    createdAt: Date;

    @Prop()
    @Field()
    updatedAt: Date;
}

export const BookSchema = SchemaFactory.createForClass(Book);
