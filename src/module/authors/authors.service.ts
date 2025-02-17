import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';

import { create, deleteById, find, findById, update } from 'src/core/db-functions/crud-db-functions';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Author, AuthorDocument } from './entities/author.entity';
import { FindAuthorInput } from './dto/find-author-input';

@Injectable()
export class AuthorsService {
  constructor(@InjectModel(Author.name) private authorModel: Model<AuthorDocument>) {}

  async create(createAuthorInput: CreateAuthorInput) {
    try {
      const author = await create(this.authorModel, createAuthorInput);
      return author;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(params: FindAuthorInput) {
    try {
      const authors = await find(this.authorModel, params || {});
      return authors;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string) {
    try {
      const author = await findById(this.authorModel, id);
      return author;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, updateAuthorInput: UpdateAuthorInput) {
    try {
      const author = await update(this.authorModel, id, updateAuthorInput);
      return author;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async remove(id: string) {
    try {
      const author = await deleteById(this.authorModel, id);
      return author;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
