import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  calculateShippingFee(orderAmount: number): number {
    if (orderAmount <= 5000) {
      return 1000;
    }
    if (orderAmount <= 14999) {
      return 700;
    }
    return 0;
  }
}
