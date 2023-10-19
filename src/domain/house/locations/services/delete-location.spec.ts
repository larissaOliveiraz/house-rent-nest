import { InMemoryLocationRepository } from '@test/repositories/in-memory-location.repository';
import { DeleteLocationService } from './delete-location.service';
import { EntityNotFoundException } from '@domain/@exceptions/entity-not-found.exception';

describe('Delete Location Service', () => {
  let locationRepository: InMemoryLocationRepository;
  let service: DeleteLocationService;

  beforeEach(async () => {
    locationRepository = new InMemoryLocationRepository();
    service = new DeleteLocationService(locationRepository);
  });

  it('should be able to delete a location', async () => {
    const { id } = await locationRepository.create({
      description: 'new-location',
    });

    const { location } = await service.execute({ id });

    expect(location.id).toEqual(id);
  });

  it('should not be able to delete a location that does not exist', async () => {
    await expect(() =>
      service.execute({ id: 'non-existing-id' }),
    ).rejects.toBeInstanceOf(EntityNotFoundException);
  });
});
