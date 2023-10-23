import { CreateHouseDTO } from '@common/dtos/house.dto';
import { HouseRepository } from '@domain/house/@this/houses.repository';
import { PrismaService } from '../prisma.service';
import { PrismaMapper } from '../prisma.mapper';

export class PrismaHouseRepository implements HouseRepository {
  constructor(private prisma: PrismaService) {}

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

    const houseDomain = PrismaMapper.toHouseDomain(house);

    return houseDomain;
  }
}
