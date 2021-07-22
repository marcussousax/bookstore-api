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
import { ProductsService } from './products.service';

@Controller('products') // This Will be the URL for the req
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getAll(): ProductModel[] {
    return this.productsService.getAll();
  }

  @Get(':id')
  getOne(@Param() params): ProductModel {
    return this.productsService.getOne(params.id);
  }

  @Post()
  create(@Body() product: ProductModel): string {
    this.productsService.create(product);

    return `Product created`;
  }

  @Put()
  edit(@Body() product: ProductModel): ProductModel {
    return this.productsService.edit(product);
  }

  @Delete(':id')
  delete(@Param() params): string {
    this.productsService.delete(params.id);

    return `Product 1000 deleted`;
  }
}
