import { UserRepository } from '@domain/users/users.repository';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from '@common/dtos/user.dto';
import { PrismaMapper } from '../prisma.mapper';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string) {
    const user = await this.prisma.user.findFirst({
      where: { id },
    });

    return user ? PrismaMapper.toDomain(user) : null;
  }

  async findByEmail(email: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user ? PrismaMapper.toDomain(user) : null;
  }

  async create(newUser: CreateUserDTO) {
    const user = await this.prisma.user.create({
      data: newUser,
    });

    return PrismaMapper.toDomain(user);
  }
}
