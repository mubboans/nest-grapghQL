import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksResolver } from './books.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './entities/book.entity';

@Module({
  providers: [BooksResolver, BooksService],
  imports: [MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }])],
})
export class BooksModule {}
