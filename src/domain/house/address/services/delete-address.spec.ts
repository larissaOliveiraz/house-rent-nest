import { InMemoryAddressRepository } from '@test/repositories/in-memory-address.repository';
import { DeleteAddressService } from './delete-address.service';
import { EntityNotFoundException } from '@domain/@exceptions/entity-not-found.exception';

describe('Create Address Service', () => {
  let addressRepository: InMemoryAddressRepository;
  let service: DeleteAddressService;

  beforeEach(async () => {
    addressRepository = new InMemoryAddressRepository();
    service = new DeleteAddressService(addressRepository);
  });

  it('should be able to delete an address', async () => {
    await addressRepository.create({
      id: 'address-01',
      street: 'new-street',
      number: '123',
      city: 'new-city',
      state: 'new-state',
    });

    expect(addressRepository.addresses).toHaveLength(1);

    const { address } = await service.execute({ id: 'address-01' });

    expect(address.street).toEqual('new-street');
    expect(addressRepository.addresses).toHaveLength(0);
  });

  it('should not be able to delete an address that does not exist', async () => {
    await expect(() =>
      service.execute({ id: 'address-01' }),
    ).rejects.toBeInstanceOf(EntityNotFoundException);
  });
});
