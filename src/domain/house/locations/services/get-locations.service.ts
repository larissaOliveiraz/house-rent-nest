import { LocationRepository } from '../locations.repository';

export class GetLocationsService {
  constructor(private locationRepository: LocationRepository) {}

  async execute() {
    const locations = await this.locationRepository.findAll();

    return { locations };
  }
}
