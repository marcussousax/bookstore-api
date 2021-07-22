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
  getAll(): BookModel[] {
    return this.booksService.getAll();
  }

  @Get(':id')
  getOne(@Param() params): BookModel {
    return this.booksService.getOne(params.id);
  }

  @Post()
  create(@Body() book: BookModel): string {
    this.booksService.create(book);

    return `Book created`;
  }

  @Put()
  edit(@Body() book: BookModel): BookModel {
    return this.booksService.edit(book);
  }

  @Delete(':id')
  delete(@Param() params): string {
    this.booksService.delete(params.id);

    return `Book 1000 deleted`;
  }
}
