import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type UserDocument = User & mongoose.Document;

@Schema({ timestamps: true })
@ObjectType()
export class User {
    @Field(() => ID)
    _id: string;

    @Prop()
    @Field()
    name: string;

    @Prop()
    @Field()
    email: string;

    @Prop()
    @Field()
    phone: string;

    @Prop()
    @Field({ nullable: true })
    createdAt: Date;

    @Prop()
    @Field({ nullable: true })
    updatedAt: Date;

    @Prop()
    @Field()
    password: string;

    @Prop()
    @Field({ nullable: true , defaultValue: 'user'})
    role: string;

    @Prop()
    @Field({ nullable: true , defaultValue: 'active'})
    status: string;

    @Field({ nullable: true })
    deletedAt: Date;

    @Prop()
    @Field({defaultValue: true})
    isActive: boolean;

    @Prop({ nullable: true })
    @Field({defaultValue: false})
    isDeleted: boolean;

    @Prop({ nullable: true })
    @Field({defaultValue: false})
    isVerified: boolean;

}


export const UserSchema = SchemaFactory.createForClass(User);