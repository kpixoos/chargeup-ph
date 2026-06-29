// backend/src/payments/paymongo.service.ts
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PayMongoService {
  private readonly apiKey = process.env.PAYMONGO_API_KEY;
  private readonly baseUrl = 'https://api.paymongo.com/v1';

  async createPaymentIntent(amountPhp: number) {
    const response = await axios.post(
      `${this.baseUrl}/payment_intents`,
      {
        data: {
          attributes: {
            amount: amountPhp * 100, // PayMongo expects cents
            currency: 'PHP',
            payment_method_allowed: