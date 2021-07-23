import { BookModel } from './book.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

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
  constructor(
    @InjectModel(BookModel)
    private bookModel: typeof BookModel,
  ) {}

  async getAll(): Promise<BookModel[]> {
    return this.bookModel.findAll();
  }

  async getOne(id: number): Promise<BookModel> {
    return this.bookModel.findByPk(id);
  }

  async create(book: BookModel): Promise<void> {
    this.bookModel.create(book);
  }

  async edit(book: BookModel): Promise<[number, BookModel[]]> {
    return this.bookModel.update(book, {
      where: {
        id: book.id,
      },
    });
  }

  async delete(id: number): Promise<void> {
    const book: BookModel = await this.getOne(id);
    book.destroy();
  }
}
