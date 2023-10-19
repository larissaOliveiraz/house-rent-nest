import { InMemoryAddressRepository } from '@test/repositories/in-memory-address.repository';
import { CreateAddressService } from './create-address.service';
import { EntityAlreadyExistsException } from '@domain/@exceptions/entity-already-exists.exception';

describe('Create Address Service', () => {
  let addressRepository: InMemoryAddressRepository;
  let service: CreateAddressService;

  beforeEach(async () => {
    addressRepository = new InMemoryAddressRepository();
    service = new CreateAddressService(addressRepository);
  });

  it('should be able to create an address', async () => {
    const { address } = await service.execute({
      street: 'new-street',
      number: '123',
      city: 'new-city',
      state: 'new-state',
    });

    expect(address.id).toEqual(expect.any(String));
  });

  it('should not be able to create an address that already exists', async () => {
    await service.execute({
      street: 'new-street',
      number: '123',
      city: 'new-city',
      state: 'new-state',
    });

    await expect(() =>
      service.execute({
        street: 'new-street',
        number: '123',
        city: 'new-city',
        state: 'new-state',
      }),
    ).rejects.toBeInstanceOf(EntityAlreadyExistsException);
  });
});
