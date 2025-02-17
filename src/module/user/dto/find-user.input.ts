import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class FindUserInput {
    @Field({ nullable: true })
    _id: string;

    @Field({ nullable: true })
    name: Date;

    @Field({ nullable: true })
    email: string;

    @Field({ nullable: true })
    password: string;

    @Field({ nullable: true })
    role: string;

    @Field({ nullable: true })
    status: string;

    @Field({ nullable: true })
    createdAt: Date;

    @Field({ nullable: true })
    updatedAt: Date;
    
    
}
