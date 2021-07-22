import { ProductModel } from './product.model';
import { Injectable } from '@nestjs/common';

/**
 * Documentation about Dependency injection
 * https://docs.nestjs.com/fundamentals/custom-providers#di-fundamentals
 *
 * First, we define a provider. The @Injectable() decorator marks the ProductsService class as a provider.
 *
 * Then we request that Nest inject the provider into our controller class:
 * On the Controller -> constructor(private productsService: ProductsService) {}
 *
 * Finally, we register the provider with the Nest IoC (inversion of control) container:
 * on app.module include de Service as a provider
 * @Module({
    controllers: [...],
    providers: [ProductsService],
  })
 */

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
