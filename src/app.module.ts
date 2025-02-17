import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { AuthorsModule } from './module/authors/authors.module';
import { BooksModule } from './module/books/books.module';
import { RentalModule } from './module/rental/rental.module';
import { UserModule } from './module/user/user.module';
import { DatabaseConfigModule } from './core/common-module/database-config.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
        driver: ApolloDriver,
        playground: false,
        autoSchemaFile: true,
        plugins: [ApolloServerPluginLandingPageLocalDefault()],
        context: ({ req }) => ({ req }),
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    DatabaseConfigModule,
    AuthorsModule,
    BooksModule,
    RentalModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
