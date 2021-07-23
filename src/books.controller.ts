import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { BookModel } from './book.model';
import { BooksService } from './books.service';

@Controller('books') // This Will be the URL for the req
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  async getAll(): Promise<BookModel[]> {
    return this.booksService.getAll();
  }

  @Get(':id')
  async getOne(@Param() params): Promise<BookModel> {
    return this.booksService.getOne(params.id);
  }

  @Post()
  async create(@Body() book: BookModel): Promise<string> {
    this.booksService.create(book);

    return `Book created`;
  }

  @Put()
  async edit(@Body() book: BookModel): Promise<[number, BookModel[]]> {
    return this.booksService.edit(book);
  }

  @Delete(':id')
  async delete(@Param() params): Promise<string> {
    this.booksService.delete(params.id);

    return `Book 1000 deleted`;
  }
}
