import { Injectable } from '@nestjs/common';
import { LocationRepository } from '../locations.repository';

@Injectable()
export class GetLocationsService {
  constructor(private locationRepository: LocationRepository) {}

  async execute() {
    const locations = await this.locationRepository.findAll();

    return { locations };
  }
}
