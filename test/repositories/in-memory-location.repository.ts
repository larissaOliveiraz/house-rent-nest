import { CreateLocationDTO } from '@common/dtos/house.dto';
import { Location } from '@domain/house/locations/locations.entity';
import { LocationRepository } from '@domain/house/locations/locations.repository';
import { randomUUID } from 'crypto';

export class InMemoryLocationRepository implements LocationRepository {
  locations: Location[] = [];

  async findById(id: string) {
    const location = this.locations.find((item) => item.id === id);

    return location ? location : null;
  }

  async findByDescription(description: string) {
    const location = this.locations.find(
      (item) => item.description === description,
    );

    return location ? location : null;
  }

  async findAll() {
    return this.locations;
  }

  async create(data: CreateLocationDTO) {
    const location: Location = {
      id: data.id ? data.id : randomUUID(),
      description: data.description,
    };

    this.locations.push(location);

    return location;
  }

  async deleteById(id: string) {
    const locationIndex = this.locations.findIndex((item) => item.id === id);

    this.locations.splice(locationIndex, 1);

    return this.locations[locationIndex];
  }
}
