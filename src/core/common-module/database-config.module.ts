import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Author, AuthorSchema } from 'src/module/authors/entities/author.entity';
import { Book, BookSchema } from 'src/module/books/entities/book.entity';
import { Rental, RentalSchema } from 'src/module/rental/entities/rental.entity';
import { User, UserSchema } from 'src/module/user/entities/user.entity';

@Module({
    imports:[
        MongooseModule.forFeature([
            { name: Rental.name, schema: RentalSchema },
            { name: User.name, schema: UserSchema },
            { name: Book.name, schema: BookSchema },
            { name: Author.name, schema: AuthorSchema },
        ]),
    ]
})
export class DatabaseConfigModule {}
