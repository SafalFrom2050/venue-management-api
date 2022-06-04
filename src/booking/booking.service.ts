import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBookingDto } from './dto/createBooking.dto';
import { UpdateEventDto } from '../event/dto/update-event.dto';
import { UpdateBookingDto } from './dto/updateBooking.dto';

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

  async update(id: number, dto: UpdateBookingDto) {
    try {
      const updatedBooking = await this.prisma.booking.update({
        where: {
          id: id,
        },
        data: {
          userId: dto.userId,
          dateTime: new Date(dto.dateTime),
          event: dto.event,
        },
      });

      return {
        status: true,
        venue: updatedBooking,
      };
    } catch (e) {
      throw e;
    }
  }

  async remove(id: number) {
    try {
      const booking = await this.prisma.booking.delete({
        where: {
          id: id,
        },
      });

      return {
        status: true,
      };
    } catch (e) {
      throw e;
    }
  }
}
