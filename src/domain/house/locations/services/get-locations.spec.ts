import { InMemoryLocationRepository } from '@test/repositories/in-memory-location.repository';
import { GetLocationsService } from './get-locations.service';

describe('Get Locations Service', () => {
  let locationRepository: InMemoryLocationRepository;
  let service: GetLocationsService;

  beforeEach(async () => {
    locationRepository = new InMemoryLocationRepository();
    service = new GetLocationsService(locationRepository);
  });

  it('should be able to get all the locations', async () => {
    await locationRepository.create({ description: 'location-01' });
    await locationRepository.create({ description: 'location-02' });

    const { locations } = await service.execute();

    expect(locations).toHaveLength(2);
  });
});
