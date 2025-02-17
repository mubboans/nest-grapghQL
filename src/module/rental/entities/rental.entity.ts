import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Book } from 'src/module/books/entities/book.entity';
import { User } from 'src/module/user/entities/user.entity';

export type RentalDocument = Rental & mongoose.Document;
@Schema({timestamps: true})
@ObjectType()
export class Rental {
    @Field(() => ID)
    _id: string;

    @Prop()
    @Field()
    dateRented: Date;

    @Prop({ type: mongoose.Types.ObjectId, ref: 'User' })
    @Field(() => User)
    userId: User;

    @Prop({ type: mongoose.Types.ObjectId, ref: 'Book' })
    @Field(() => [Book])
    bookIds: Book[];

    @Prop()
    @Field()
    createdAt: Date;

    @Prop()
    @Field()
    updatedAt: Date;
}

export const RentalSchema = SchemaFactory.createForClass(Rental);


