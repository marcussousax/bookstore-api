import { BookModel } from './book.model';
import { Injectable } from '@nestjs/common';

/**
 * Documentation about Dependency injection
 * https://docs.nestjs.com/fundamentals/custom-providers#di-fundamentals
 *
 * First, we define a provider. The @Injectable() decorator marks the BooksService class as a provider.
 *
 * Then we request that Nest inject the provider into our controller class:
 * On the Controller -> constructor(private booksService: BooksService) {}
 *
 * Finally, we register the provider with the Nest IoC (inversion of control) container:
 * on app.module include de Service as a provider
 * @Module({
    controllers: [...],
    providers: [BooksService],
  })
 */

@Injectable()
export class BooksService {
  books: BookModel[] = [
    new BookModel('LIV01', 'Livro Zero Um', 29.9),
    new BookModel('LIV02', 'Livro Zero Dois', 19.9),
    new BookModel('LIV03', 'Livro Zero Três', 49.9),
  ];

  getAll(): BookModel[] {
    return this.books;
  }

  getOne(id: number): BookModel {
    return this.books[0];
  }

  create(book: BookModel): void {
    this.books.push(book);
  }

  edit(book: BookModel): BookModel {
    return book;
  }

  delete(id: number): void {
    this.books.pop();
  }
}
