// backend/src/app.module.ts
import { Module } from '@nestjs/common';
import { BookingsController } from './bookings/bookings.controller';
import { PayMongoService } from './payments/paymongo.service';

@Module({
  imports: [],
  controllers: [BookingsController],
  providers: [PayMongoService],
})
export class AppModule {}
