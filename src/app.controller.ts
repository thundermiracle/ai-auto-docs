import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('shipping-fee')
  getShippingFee(@Query('amount') amount: string) {
    const orderAmount = Number(amount);
    if (!Number.isFinite(orderAmount) || !Number.isInteger(orderAmount) || orderAmount < 0) {
      throw new BadRequestException('amount must be a non-negative integer');
    }

    const shippingFee = this.appService.calculateShippingFee(orderAmount);
    return { orderAmount, shippingFee };
  }
}
