import { CreateLocationDTO } from '@common/dtos/house.dto';
import { LocationRepository } from '@domain/house/locations/locations.repository';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaLocationRepository implements LocationRepository {
  constructor(private prisma: PrismaService) {}

  async findByDescription(description: string) {
    const location = await this.prisma.location.findUnique({
      where: { description },
    });

    return location ? location : null;
  }

  async create(data: CreateLocationDTO) {
    const location = await this.prisma.location.create({
      data,
    });

    return location;
  }
}
