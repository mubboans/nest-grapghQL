import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field({nullable: true})
  role: string;

    @Field({ nullable: true })
  status: string;

    @Field({ nullable: true })
  createdAt: Date;

    @Field({ nullable: true })
  updatedAt: Date;

    @Field({ nullable: true })
  deletedAt: Date;

    @Field({ nullable: true })
  isActive: boolean;

    @Field({ nullable: true })
  isDeleted: boolean;

    @Field({ nullable: true })
  isVerified: boolean;

}
