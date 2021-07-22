import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { ProductModel } from './product.model';

@Controller('products') // This Will be the URL for the req
export class ProductsController {
  products: ProductModel[] = [
    new ProductModel('LIV01', 'Livro Zero Um', 29.9),
    new ProductModel('LIV02', 'Livro Zero Dois', 19.9),
    new ProductModel('LIV03', 'Livro Zero Três', 49.9),
  ];

  @Get()
  getAll(): ProductModel[] {
    return this.products;
  }

  @Get(':id')
  getOne(@Param() Param): ProductModel {
    return this.products[0];
  }

  @Post()
  create(@Body() product: ProductModel): string {
    product.id = 100;
    this.products.push(product);
    return `Product created`;
  }

  @Put()
  edit(@Body() product: ProductModel): ProductModel {
    console.log(product);
    return product;
  }

  @Delete(':id')
  delete(@Param() params): string {
    this.products.pop();
    return `Product ${params.id} deleted`;
  }
}
