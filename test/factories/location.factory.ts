import { CreateLocationDTO } from '@common/dtos/house.dto';
import { InMemoryLocationRepository } from '@test/repositories/in-memory-location.repository';

type LocationFactoryType = Partial<CreateLocationDTO>;

export class LocationFactory {
  constructor(private locationRepository: InMemoryLocationRepository) {}

  async make({ id, description }: LocationFactoryType) {
    const location = await this.locationRepository.create({
      id: id ?? 'location-01',
      description: description ?? 'new-description',
    });

    return location;
  }
}
