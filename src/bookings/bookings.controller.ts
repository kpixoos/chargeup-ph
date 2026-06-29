// backend/src/bookings/bookings.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { PayMongoService } from '../payments/paymongo.service';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly payMongoService: PayMongoService) {}

  @Post()
  async createBooking(@Body() body: { amount_php: number }) {
    const paymentIntent = await this.payMongoService.createPaymentIntent(body.amount_php);
    return {
      message: 'Booking created successfully',
      paymentIntent,
    };
  }
}
