import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AdminService } from './admin.service';
import { LoginAdminDto } from './dto/login-admin.dto';


@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}


@Post('login')
async login(@Body() body: { email: string; password: string }) {
  const result = await this.adminService.login(body.email, body.password);
  if (!result) {
    throw new UnauthorizedException('Invalid email or password');
  }
  return { accessToken: result.accessToken };
}

}
