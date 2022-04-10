import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBookingDto } from './dto/createBooking.dto';

@Injectable()
export class BookingService {
  constructor(private prisma: PrismaService) {}

  async createBooking(dto: CreateBookingDto) {
    try {
      const newBooking = await this.prisma.booking.create({
        data: {
          userId: dto.userId,
          dateTime: new Date(dto.dateTime),
          event: dto.event,
        },
      });

      return {
        status: true,
        booking: newBooking,
      };
    } catch (e) {
      throw e;
    }
  }

  async getBookings() {
    try {
      const bookings = await this.prisma.booking.findMany({});
      return bookings;
    } catch (e) {
      throw e;
    }
  }
}
