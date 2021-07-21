import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';

describe('ProductsController', () => {
  let productsController: ProductsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
    }).compile();

    productsController = app.get<ProductsController>(ProductsController);
  });

  describe('root', () => {
    const PRODUCT_MOCK = {
      id: '100',
      name: 'testing',
      price: '29.90',
    };

    it('should return "All Books"', () => {
      expect(productsController.getAll()).toBe('All Books');
    });

    it('should return "Found product 100"', () => {
      expect(productsController.getOne(PRODUCT_MOCK)).toBe('Found product 100');
    });

    it('should return "Product created"', () => {
      expect(productsController.create(PRODUCT_MOCK)).toBe('Product created');
    });

    it('should return "Product updated"', () => {
      expect(productsController.edit(PRODUCT_MOCK)).toBe('Product updated');
    });
    it('should return "Product 200 deleted"', () => {
      expect(productsController.delete({ id: 200 })).toBe(
        'Product 200 deleted',
      );
    });
  });
});
