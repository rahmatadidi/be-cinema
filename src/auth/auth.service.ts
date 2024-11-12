// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import { AdminService } from '../admin/admin.service';
// import * as bcrypt from 'bcrypt';

// @Injectable()
// export class AuthService {
//   constructor(
//     private adminService: AdminService,
//     private jwtService: JwtService,
//   ) {}

//   async login(username: string, password: string) {
//     const admin = await this.adminService.findAdminByUsername(username);

//     if (!admin || !(await bcrypt.compare(password, admin.password))) {
//       throw new UnauthorizedException('Invalid credentials');
//     }

//     const payload = { username: admin.username, sub: admin.id };
//     return {
//       access_token: this.jwtService.sign(payload),
//     };
//   }
// }
