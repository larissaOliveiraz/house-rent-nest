import { InMemoryAddressRepository } from '@test/repositories/in-memory-address.repository';
import { FindAddressService } from './find-address.service';
import { EntityNotFoundException } from '@domain/@exceptions/entity-not-found.exception';

describe('Find Address Service', () => {
  let addressRepository: InMemoryAddressRepository;
  let service: FindAddressService;

  beforeEach(async () => {
    addressRepository = new InMemoryAddressRepository();
    service = new FindAddressService(addressRepository);
  });

  it('should be able to find an address', async () => {
    await addressRepository.create({
      id: 'address-01',
      street: 'new-street',
      number: '123',
      city: 'new-city',
      state: 'new-state',
    });

    const { address } = await service.execute({ id: 'address-01' });

    expect(address.street).toEqual('new-street');
  });

  it('should not be able to find an address that does not exist', async () => {
    await expect(() =>
      service.execute({ id: 'non-existing-id' }),
    ).rejects.toBeInstanceOf(EntityNotFoundException);
  });
});
