import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  async createAdmin(adminData: { username: string; password: string }) {
    return this.prisma.admin.create({
      data: adminData,
    });
  }

  async findAdminByUsername(username: string) {
    return this.prisma.admin.findUnique({
      where: { username },
    });
  }

  async validateAdmin(username: string, password: string) {
    const admin = await this.findAdminByUsername(username);
    if (admin && (await bcrypt.compare(password, admin.password))) {
      return admin;
    }
    return null;
  }

  async generateToken(adminId: string) {
    return jwt.sign({ id: adminId }, 'secretKey', { expiresIn: '1h' });
  }
}
