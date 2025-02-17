import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AuthorsService } from './authors.service';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { Author } from './entities/author.entity';
import { FindAuthorInput } from './dto/find-author-input';

@Resolver(() => Author)
export class AuthorsResolver {
  constructor(private readonly authorsService: AuthorsService) {}

  @Mutation(() => Author)
  createAuthor(@Args('createAuthorInput') createAuthorInput: CreateAuthorInput) {
    return this.authorsService.create(createAuthorInput);
  }

  @Query(() => [Author], { name: 'authors' })
  findAll(@Args('params') params: FindAuthorInput) {
    return this.authorsService.findAll(params);
  }

  @Query(() => Author, { name: 'author' })
  findOne(@Args('id') id: string) {
    return this.authorsService.findOne(id);
  }

  @Mutation(() => Author)
  updateAuthor(@Args('updateAuthorInput') updateAuthorInput: UpdateAuthorInput) {
    return this.authorsService.update(updateAuthorInput._id, updateAuthorInput);
  }

  @Mutation(() => Author)
  removeAuthor(@Args('id') id: string) {
    return this.authorsService.remove(id);
  }
}
