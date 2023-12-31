import { EntityNotFoundException } from '@domain/@exceptions/entity-not-found.exception';
import { LocationRepository } from '../locations.repository';
import { Injectable } from '@nestjs/common';

type DeleteLocationRequest = {
  id: string;
};

@Injectable()
export class DeleteLocationService {
  constructor(private locationRepository: LocationRepository) {}

  async execute({ id }: DeleteLocationRequest) {
    const location = await this.locationRepository.findById(id);

    if (!location) {
      throw new EntityNotFoundException('Location', id);
    }

    await this.locationRepository.deleteById(id);

    return { location };
  }
}
