import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('products') // This Will be the URL for the req
export class ProductsController {
  @Get()
  getAll(): string {
    return `All Books`;
  }

  @Get(':id')
  getOne(@Param() params): string {
    return `Found product ${params.id}`;
  }

  @Post()
  create(@Body() product): string {
    console.log(product);
    return `Product created`;
  }

  @Put()
  edit(@Body() product): string {
    console.log(product);
    return `Product updated`;
  }

  @Delete(':id')
  delete(@Param() params): string {
    return `Product ${params.id} deleted`;
  }
}
