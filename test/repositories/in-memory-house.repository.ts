import { CreateHouseDTO } from '@common/dtos/house.dto';
import { House } from '@domain/house/@this/houses.entity';
import { HouseRepository } from '@domain/house/@this/houses.repository';
import { randomUUID } from 'crypto';

export class InMemoryHouseRepository implements HouseRepository {
  houses: House[] = [];

  async findById(id: string) {
    const house = this.houses.find((item) => item.id === id);

    return house ? house : null;
  }

  async findByAddress(addressId: string) {
    const house = this.houses.find((item) => item.addressId === addressId);

    return house ? house : null;
  }

  async create(data: CreateHouseDTO) {
    const house: House = {
      id: data.id ?? randomUUID(),
      title: data.title,
      description: data.description,
      dailyPrice: data.dailyPrice,
      dailyFine: data.dailyFine,
      userId: data.userId,
      typeId: data.typeId,
      locationId: data.locationId,
      addressId: data.addressId,
    };

    this.houses.push(house);

    return house;
  }
}
