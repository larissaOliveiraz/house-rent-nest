import { EntityAlreadyExistsException } from '@domain/@exceptions/entity-already-exists.exception';
import { LocationRepository } from '../locations.repository';

type CreateLocationRequest = {
  description: string;
};

export class CreateLocationService {
  constructor(private locationRepository: LocationRepository) {}

  async execute({ description }: CreateLocationRequest) {
    const locationExists =
      await this.locationRepository.findByDescription(description);

    if (locationExists) {
      throw new EntityAlreadyExistsException('Location');
    }

    const location = await this.locationRepository.create({ description });

    return { location };
  }
}
