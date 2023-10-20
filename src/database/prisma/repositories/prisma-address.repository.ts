import { CheckAddressDTO, CreateAddressDTO } from '@common/dtos/house.dto';
import { Address } from '@domain/house/address/address.entity';
import { AddressRepository } from '@domain/house/address/address.repository';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaAddressRepository implements AddressRepository {
  constructor(private prisma: PrismaService) {}

  async findById(id: string) {
    const address = await this.prisma.address.findUnique({
      where: { id },
    });

    return address ? address : null;
  }

  async findFullAddress(data: CheckAddressDTO) {
    const address = await this.prisma.address.findFirst({
      where: {
        AND: [
          { street: data.street },
          { number: data.number },
          { city: data.city },
          { state: data.state },
        ],
      },
    });

    return address ? address : null;
  }

  async create(data: CreateAddressDTO) {
    const address = await this.prisma.address.create({
      data,
    });

    return address;
  }

  async deleteById(id: string) {
    return this.prisma.address.delete({
      where: { id },
    });
  }
}
