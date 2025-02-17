import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book, BookDocument } from './entities/book.entity';
import { create, deleteById, find, findById, update } from 'src/core/db-functions/crud-db-functions';
import { FindBookInput } from './dto/find-book-input';

@Injectable()
export class BooksService {
    constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}
  async create(createBookInput: CreateBookInput) {
    try {
      const book = await create(this.bookModel, createBookInput);
      return book;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(params: FindBookInput) {
    try {
        const books = await find(this.bookModel, params || {}, ['authorIds']);
      return books;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string) {
    try {
      const book = await findById(this.bookModel, id);
      return book;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, updateBookInput: UpdateBookInput) {
    try {
        const book = await update(this.bookModel, id, updateBookInput);
        return book;
    } catch (error) {
        throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async remove(id: string) {
    try {
        const book = await deleteById(this.bookModel, id);
        return book;
    } catch (error) {
        throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
