import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './books.controller';
import { BookModel } from './book.model';
import { BooksService } from './books.service';

describe('BooksController', () => {
  const books: BookModel[] = [
    new BookModel('LIV01', 'Livro Zero Um', 29.9),
    new BookModel('LIV02', 'Livro Zero Dois', 19.9),
    new BookModel('LIV03', 'Livro Zero Três', 49.9),
  ];
  console.dir(books);

  let booksController: BooksController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [BooksService],
    }).compile();

    booksController = app.get<BooksController>(BooksController);
  });

  describe('root', () => {
    it('should return "All Books"', () => {
      expect(booksController.getAll()).toEqual(books);
    });

    it('should return 1 book', () => {
      expect(booksController.getOne(books[0])).toEqual({
        code: 'LIV01',
        name: 'Livro Zero Um',
        price: 29.9,
      });
    });

    it('should return "Book created"', () => {
      expect(
        booksController.create({
          id: 1000,
          name: 'TESTING BOOK',
          price: 29.9,
          code: 'LIVTEST',
        }),
      ).toBe('Book created');
    });

    it('should return "Book updated"', () => {
      expect(
        booksController.edit({
          id: 1000,
          name: 'TESTING BOOK',
          price: 29.9,
          code: 'LIVTEST',
        }),
      ).toStrictEqual({
        id: 1000,
        name: 'TESTING BOOK',
        price: 29.9,
        code: 'LIVTEST',
      });
    });

    it('should return "Book 200 deleted"', () => {
      expect(booksController.delete({ id: 1000 })).toBe('Book 1000 deleted');
    });
  });
});
