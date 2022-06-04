import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/createBooking.dto';
import { JwtGuard } from '../auth/guard';
import { UpdateFeedbackDto } from '../feedback/dto/updateFeedback.dto';
import { UpdateBookingDto } from './dto/updateBooking.dto';

@UseGuards(JwtGuard)
@Controller('bookings')
export class BookingController {
  constructor(private bookingService: BookingService) {}

  @Post('create')
  createFeedback(@Body() dto: CreateBookingDto) {
    return this.bookingService.createBooking(dto);
  }

  @Get()
  getFeedbacks() {
    return this.bookingService.getBookings();
  }

  @Patch(':id')
  update(@Param('id') id: string, dto: UpdateBookingDto) {
    return this.bookingService.update(+id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.bookingService.remove(+id);
  }
}
