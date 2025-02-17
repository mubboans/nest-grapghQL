import { CreateAuthorInput } from './create-author.input';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';
import { Book } from 'src/module/books/entities/book.entity';

@InputType()
export class UpdateAuthorInput extends PartialType(CreateAuthorInput) {
  @Field(() => ID)
  _id: string;

}
