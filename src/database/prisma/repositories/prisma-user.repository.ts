import { UserRepository } from '@domain/repositories/user.repository';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByEmail(email: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user ? user : null;
  }

  async create(newUser: Prisma.UserCreateInput) {
    const user = await this.prisma.user.create({
      data: newUser,
    });

    return user;
  }
}
