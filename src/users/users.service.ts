import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserSafeSelect } from './constants/user.safe.select/user.safe.select';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email: email,
      },
      select: UserSafeSelect,
    });
  }

  async create(data: {
    email: string;
    firstName: string;
    lastName?: string;
    password: string;
    phone: string;
  }) {
    return this.prisma.user.create({
      data: {
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        password: data.password,
        phone: data.phone,
      },
      select: UserSafeSelect,
    });
  }
}
