import { CreateHouseDTO } from '@common/dtos/house.dto';
import { HouseRepository } from '@domain/house/@this/houses.repository';
import { PrismaService } from '../prisma.service';
import { PrismaMapper } from '../prisma.mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaHouseRepository implements HouseRepository {
  constructor(private prisma: PrismaService) {}

  async findById(id: string) {
    const house = await this.prisma.house.findUnique({
      where: { id },
    });

    return house ? PrismaMapper.toHouseDomain(house) : null;
  }

  async findByAddress(addressId: string) {
    const house = await this.prisma.house.findFirst({
      where: { address_id: addressId },
    });

    return house ? PrismaMapper.toHouseDomain(house) : null;
  }

  async create(data: CreateHouseDTO) {
    const house = await this.prisma.house.create({
      data: {
        title: data.title,
        description: data.description,
        daily_price: data.dailyPrice,
        daily_fine: data.dailyFine,
        user_id: data.userId,
        type_id: data.typeId,
        location_id: data.locationId,
        address_id: data.addressId,
      },
    });

    return PrismaMapper.toHouseDomain(house);
  }
}
