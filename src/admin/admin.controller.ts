import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

dotenv.config();

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('register')
  async registerAdmin(
    @Body() adminData: { username: string; password: string },
  ) {
    const hashedPassword = await bcrypt.hash(adminData.password, 10);
    return this.adminService.createAdmin({
      username: adminData.username,
      password: hashedPassword,
    });
  }

  @Post('login')
  async login(@Body() adminData: { username: string; password: string }) {
    const admin = await this.adminService.findAdminByUsername(
      adminData.username,
    );
    if (!admin || !(await bcrypt.compare(adminData.password, admin.password))) {
      throw new HttpException(
        'Invalid username or password',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    return { token };
  }
}
