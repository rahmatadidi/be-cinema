import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookingService } from './booking.service';

@Controller('book')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  async createBooking(
    @Body()
    bookingData: {
      name: string;
      movie: string;
      email: string;
      date: string;
      seat: string;
    },
  ) {
    return this.bookingService.createBooking(bookingData);
  }

  @Get()
  async getAllBookings() {
    return this.bookingService.getBookings();
  }
}
