import { CreateHouseDTO } from '@common/dtos/house.dto';
import { HouseRepository } from '@domain/house/@this/houses.repository';
import { PrismaService } from '../prisma.service';
import { PrismaMapper } from '../prisma.mapper';
import { Injectable } from '@nestjs/common';
import { House } from '@domain/house/@this/houses.entity';

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

  async findManyByLocation(locationId: string) {
    const houses = await this.prisma.house.findMany({
      where: { location_id: locationId },
    });

    const housesDomain = houses.map((house) =>
      PrismaMapper.toHouseDomain(house),
    );

    return housesDomain;
  }

  async findManyByType(typeId: string) {
    const houses = await this.prisma.house.findMany({
      where: { type_id: typeId },
    });

    const housesDomain = houses.map((house) =>
      PrismaMapper.toHouseDomain(house),
    );

    return housesDomain;
  }

  async findManyByTitle(title: string) {
    const houses = await this.prisma.house.findMany({
      where: { title },
    });

    const housesDomain = houses.map((house) =>
      PrismaMapper.toHouseDomain(house),
    );

    return housesDomain;
  }

  async findAll() {
    const houses = await this.prisma.house.findMany();

    const housesDomain = houses.map((house) =>
      PrismaMapper.toHouseDomain(house),
    );

    return housesDomain;
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
