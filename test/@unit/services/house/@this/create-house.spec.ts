import { EntityNotFoundException } from '@domain/@exceptions/entity-not-found.exception';
import { CreateHouseService } from '@domain/house/@this/services/create-house.service';
import { AddressFactory } from '@test/factories/address.factory';
import { LocationFactory } from '@test/factories/location.factory';
import { TypeFactory } from '@test/factories/type.factory';
import { UserFactory } from '@test/factories/user.factory';
import { InMemoryAddressRepository } from '@test/repositories/in-memory-address.repository';
import { InMemoryHouseRepository } from '@test/repositories/in-memory-house.repository';
import { InMemoryLocationRepository } from '@test/repositories/in-memory-location.repository';
import { InMemoryTypeRepository } from '@test/repositories/in-memory-type.repository';
import { InMemoryUserRepository } from '@test/repositories/in-memory-user.repository';

describe('Create House Service', () => {
  let houseRepository: InMemoryHouseRepository;
  let userRepository: InMemoryUserRepository;
  let typeRepository: InMemoryTypeRepository;
  let locationRepository: InMemoryLocationRepository;
  let addressRepository: InMemoryAddressRepository;
  let service: CreateHouseService;

  beforeEach(async () => {
    houseRepository = new InMemoryHouseRepository();
    userRepository = new InMemoryUserRepository();
    typeRepository = new InMemoryTypeRepository();
    locationRepository = new InMemoryLocationRepository();
    addressRepository = new InMemoryAddressRepository();
    service = new CreateHouseService(
      houseRepository,
      userRepository,
      typeRepository,
      locationRepository,
      addressRepository,
    );

    await new UserFactory(userRepository).make({});
    await new TypeFactory(typeRepository).make({});
    await new LocationFactory(locationRepository).make({});
    await new AddressFactory(addressRepository).make({});
  });

  it('should be able to create a house', async () => {
    const { house } = await service.execute({
      title: 'new-title',
      description: 'new-description',
      dailyPrice: 100,
      dailyFine: 200,
      userId: 'user-01',
      typeId: 'type-01',
      locationId: 'location-01',
      addressId: 'address-01',
    });

    expect(house.user_id).toEqual('user-01');
    expect(houseRepository.houses).toHaveLength(1);
  });

  it('should not be able to create a house with a non existing user', async () => {
    await expect(() =>
      service.execute({
        title: 'new-title',
        description: 'new-description',
        dailyPrice: 100,
        dailyFine: 200,
        userId: 'non-existing-id',
        typeId: 'type-01',
        locationId: 'location-01',
        addressId: 'address-01',
      }),
    ).rejects.toBeInstanceOf(EntityNotFoundException);
  });

  it('should not be able to create a house with a non existing type', async () => {
    await expect(() =>
      service.execute({
        title: 'new-title',
        description: 'new-description',
        dailyPrice: 100,
        dailyFine: 200,
        userId: 'user-01',
        typeId: 'non-existing-id',
        locationId: 'location-01',
        addressId: 'address-01',
      }),
    ).rejects.toBeInstanceOf(EntityNotFoundException);
  });

  it('should not be able to create a house with a non existing location', async () => {
    await expect(() =>
      service.execute({
        title: 'new-title',
        description: 'new-description',
        dailyPrice: 100,
        dailyFine: 200,
        userId: 'user-01',
        typeId: 'type-01',
        locationId: 'non-existing-id',
        addressId: 'address-01',
      }),
    ).rejects.toBeInstanceOf(EntityNotFoundException);
  });

  it('should not be able to create a house with a non existing address', async () => {
    await expect(() =>
      service.execute({
        title: 'new-title',
        description: 'new-description',
        dailyPrice: 100,
        dailyFine: 200,
        userId: 'user-01',
        typeId: 'type-01',
        locationId: 'location-01',
        addressId: 'non-existing-id',
      }),
    ).rejects.toBeInstanceOf(EntityNotFoundException);
  });
});
