import { CreateHouseDTO } from '@common/dtos/house.dto';
import { InMemoryHouseRepository } from '@test/repositories/in-memory-house.repository';

type HouseFactoryType = Partial<CreateHouseDTO>;

export class HouseFactory {
  constructor(private houseRepository: InMemoryHouseRepository) {}

  async make(data: HouseFactoryType) {
    const house = await this.houseRepository.create({
      id: data.id ?? 'house-01',
      title: data.title ?? 'new-title',
      description: data.description ?? 'new-description',
      dailyPrice: data.dailyPrice ?? 100,
      dailyFine: data.dailyFine ?? 200,
      userId: data.userId ?? 'user-01',
      typeId: data.typeId ?? 'type-01',
      locationId: data.locationId ?? 'location-01',
      addressId: data.addressId ?? 'address-01',
    });

    return house;
  }
}
