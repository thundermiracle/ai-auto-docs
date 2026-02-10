import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('shipping-fee', () => {
    it('should return 1000 when amount is 3000', () => {
      expect(appController.getShippingFee('3000')).toEqual({
        orderAmount: 3000,
        shippingFee: 1000,
      });
    });

    it('should return 500 when amount is 9999', () => {
      expect(appController.getShippingFee('9999')).toEqual({
        orderAmount: 9999,
        shippingFee: 500,
      });
    });

    it('should return 0 when amount is 10000', () => {
      expect(appController.getShippingFee('10000')).toEqual({
        orderAmount: 10000,
        shippingFee: 0,
      });
    });
  });
});
