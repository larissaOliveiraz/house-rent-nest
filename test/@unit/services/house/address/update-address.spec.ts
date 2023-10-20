import { InMemoryAddressRepository } from '@test/repositories/in-memory-address.repository';
import { UpdateAddressService } from '../../../../../src/domain/house/address/services/update-address.service';
import { EntityNotFoundException } from '@domain/@exceptions/entity-not-found.exception';
import { EntityAlreadyExistsException } from '@domain/@exceptions/entity-already-exists.exception';

describe('Find Address Service', () => {
  let addressRepository: InMemoryAddressRepository;
  let service: UpdateAddressService;

  beforeEach(async () => {
    addressRepository = new InMemoryAddressRepository();
    service = new UpdateAddressService(addressRepository);
  });

  it('should be able to update an address', async () => {
    await addressRepository.create({
      id: 'address-01',
      street: 'new-street',
      number: '123',
      city: 'new-city',
      state: 'new-state',
    });

    const updatedAddress = {
      street: 'updated-street',
      number: '123',
      city: 'updated-city',
      state: 'updated-state',
    };

    const { address } = await service.execute({
      id: 'address-01',
      data: updatedAddress,
    });

    expect(address.id).toEqual('address-01');
    expect(addressRepository.addresses).toHaveLength(1);
    expect(addressRepository.addresses[0]).toEqual(
      expect.objectContaining({
        street: 'updated-street',
      }),
    );
  });

  it('should not be able to update an address that does not exist', async () => {
    const updatedAddress = {
      street: 'updated-street',
      number: '123',
      city: 'updated-city',
      state: 'updated-state',
    };

    await expect(() =>
      service.execute({
        id: 'non-existing-id',
        data: updatedAddress,
      }),
    ).rejects.toBeInstanceOf(EntityNotFoundException);
  });

  it('should not be able to update an address with another address that already exists', async () => {
    await addressRepository.create({
      id: 'address-01',
      street: 'new-street',
      number: '123',
      city: 'new-city',
      state: 'new-state',
    });

    await addressRepository.create({
      id: 'address-02',
      street: 'new-street2',
      number: '1234',
      city: 'new-city2',
      state: 'new-state2',
    });

    const updatedAddress = {
      street: 'new-street2',
      number: '1234',
      city: 'new-city2',
      state: 'new-state2',
    };

    await expect(() =>
      service.execute({
        id: 'address-01',
        data: updatedAddress,
      }),
    ).rejects.toBeInstanceOf(EntityAlreadyExistsException);
  });
});
