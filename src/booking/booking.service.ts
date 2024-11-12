import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BookingService {
  constructor(private prisma: PrismaService) {}

  async createBooking(data) {
    return this.prisma.booking.create({
      data: {
        name: data.name,
        email: data.email,
        movie: data.movie,
        date: new Date(data.date),
        seat: data.seat,
      },
    });
  }

  async getBookings() {
    return this.prisma.booking.findMany();
  }
}
