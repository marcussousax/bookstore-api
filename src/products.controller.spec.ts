import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductModel } from './product.model';
import { ProductsService } from './products.service';

describe('ProductsController', () => {
  const products: ProductModel[] = [
    new ProductModel('LIV01', 'Livro Zero Um', 29.9),
    new ProductModel('LIV02', 'Livro Zero Dois', 19.9),
    new ProductModel('LIV03', 'Livro Zero Três', 49.9),
  ];
  console.dir(products);

  let productsController: ProductsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService],
    }).compile();

    productsController = app.get<ProductsController>(ProductsController);
  });

  describe('root', () => {
    it('should return "All Books"', () => {
      expect(productsController.getAll()).toEqual(products);
    });

    it('should return 1 product', () => {
      expect(productsController.getOne(products[0])).toEqual({
        code: 'LIV01',
        name: 'Livro Zero Um',
        price: 29.9,
      });
    });

    it('should return "Product created"', () => {
      expect(
        productsController.create({
          id: 1000,
          name: 'TESTING BOOK',
          price: 29.9,
          code: 'LIVTEST',
        }),
      ).toBe('Product created');
    });

    it('should return "Product updated"', () => {
      expect(
        productsController.edit({
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

    it('should return "Product 200 deleted"', () => {
      expect(productsController.delete({ id: 1000 })).toBe(
        'Product 1000 deleted',
      );
    });
  });
});
