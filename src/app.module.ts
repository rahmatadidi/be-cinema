import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingModule } from './booking/booking.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [BookingModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
