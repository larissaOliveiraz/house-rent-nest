import { CreateHouseDTO } from '@common/dtos/house.dto';
import { House } from '@domain/house/@this/houses.entity';
import { HouseRepository } from '@domain/house/@this/houses.repository';
import { randomUUID } from 'crypto';

export class InMemoryHouseRepository implements HouseRepository {
  houses: House[] = [];

  async create(data: CreateHouseDTO) {
    const house: House = {
      id: data.id ?? randomUUID(),
      title: data.title,
      description: data.description,
      dailyPrice: data.dailyPrice,
      dailyFine: data.dailyFine,
      user_id: data.userId,
      type_id: data.typeId,
      location_id: data.locationId,
      address_id: data.addressId,
    };

    this.houses.push(house);

    return house;
  }
}
