import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from './admin.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,
    private jwtService: JwtService,
  ) {}

  async login(email: string, password: string): Promise<{ accessToken: string } | null> {
    const admin = await this.adminRepository.findOne({ where: { email } });
    if (!admin) {
      return null;
    }
    const isValid = await bcrypt.compare(password, admin.password);
    if (!isValid) {
      return null;
    }
    const payload = { email: admin.email, sub: admin.id };
    const accessToken = this.jwtService.sign(payload);
    return { accessToken };
  }
}
