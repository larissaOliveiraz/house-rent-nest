import { Injectable } from '@nestjs/common';
import { CreateTypeDTO } from '@common/dtos/house.dto';
import { TypeRepository } from '@domain/house/type/types.repository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaTypeRepository implements TypeRepository {
  constructor(private prisma: PrismaService) {}

  async findByDescription(description: string) {
    const type = await this.prisma.type.findUnique({
      where: { description },
    });

    return type ? type : null;
  }

  async create(data: CreateTypeDTO) {
    const type = await this.prisma.type.create({
      data,
    });

    return type;
  }
}
