import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateBookInput {
    @Field()
    name: string;

    @Field()
    genre: string;

    @Field()
    publishedYear: string;

    @Field(() => [String])
    authorIds?: string[];
}
