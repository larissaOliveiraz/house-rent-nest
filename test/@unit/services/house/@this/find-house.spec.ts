import { EntityNotFoundException } from '@domain/@exceptions/entity-not-found.exception';
import { FindHouseService } from '@domain/house/@this/services/find-house.service';
import { HouseFactory } from '@test/factories/house.factory';
import { InMemoryHouseRepository } from '@test/repositories/in-memory-house.repository';

describe('Find House Service', () => {
  let houseRepository: InMemoryHouseRepository;
  let service: FindHouseService;

  beforeEach(async () => {
    houseRepository = new InMemoryHouseRepository();
    service = new FindHouseService(houseRepository);
  });

  it('should be able to find a house by their id', async () => {
    await new HouseFactory(houseRepository).make({});

    const { house } = await service.execute({ id: 'house-01' });

    expect(house.title).toEqual('new-title');
  });

  it('should not be able to find a house that does not exist', async () => {
    await expect(() =>
      service.execute({ id: 'non-existing-id' }),
    ).rejects.toBeInstanceOf(EntityNotFoundException);
  });
});
