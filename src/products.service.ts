import { ProductModel } from './product.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  products: ProductModel[] = [
    new ProductModel('LIV01', 'Livro Zero Um', 29.9),
    new ProductModel('LIV02', 'Livro Zero Dois', 19.9),
    new ProductModel('LIV03', 'Livro Zero Três', 49.9),
  ];

  getAll(): ProductModel[] {
    return this.products;
  }

  getOne(id: number): ProductModel {
    return this.products[0];
  }

  create(product: ProductModel): void {
    this.products.push(product);
  }

  edit(product: ProductModel): ProductModel {
    return product;
  }

  delete(id: number): void {
    this.products.pop();
  }
}
