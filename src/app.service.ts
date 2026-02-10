import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  calculateShippingFee(orderAmount: number): number {
    if (orderAmount <= 3000) {
      return 1000;
    }
    if (orderAmount <= 9999) {
      return 500;
    }
    return 0;
  }
}
