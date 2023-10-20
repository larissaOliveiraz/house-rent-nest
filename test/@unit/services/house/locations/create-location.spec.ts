import { InMemoryLocationRepository } from '@test/repositories/in-memory-location.repository';
import { CreateLocationService } from '../../../../../src/domain/house/locations/services/create-location.service';
import { EntityAlreadyExistsException } from '@domain/@exceptions/entity-already-exists.exception';

describe('Create Location Service', () => {
  let typeRepository: InMemoryLocationRepository;
  let service: CreateLocationService;

  beforeEach(async () => {
    typeRepository = new InMemoryLocationRepository();
    service = new CreateLocationService(typeRepository);
  });

  it('should be able to create a location', async () => {
    const { location } = await service.execute({ description: 'new-location' });

    expect(location.id).toEqual(expect.any(String));
  });

  it('should not be able to create a location that already exists', async () => {
    await service.execute({ description: 'new-location' });

    await expect(() =>
      service.execute({ description: 'new-location' }),
    ).rejects.toBeInstanceOf(EntityAlreadyExistsException);
  });
});
