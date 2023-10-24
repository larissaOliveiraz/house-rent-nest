import { GetHousesService } from '@domain/house/@this/services/get-houses.service';
import { AddressFactory } from '@test/factories/address.factory';
import { HouseFactory } from '@test/factories/house.factory';
import { LocationFactory } from '@test/factories/location.factory';
import { TypeFactory } from '@test/factories/type.factory';
import { UserFactory } from '@test/factories/user.factory';
import { InMemoryAddressRepository } from '@test/repositories/in-memory-address.repository';
import { InMemoryHouseRepository } from '@test/repositories/in-memory-house.repository';
import { InMemoryLocationRepository } from '@test/repositories/in-memory-location.repository';
import { InMemoryTypeRepository } from '@test/repositories/in-memory-type.repository';
import { InMemoryUserRepository } from '@test/repositories/in-memory-user.repository';

describe('Get Houses Service', () => {
  let houseRepository: InMemoryHouseRepository;
  let userRepository: InMemoryUserRepository;
  let locationRepository: InMemoryLocationRepository;
  let typeRepository: InMemoryTypeRepository;
  let addressRepository: InMemoryAddressRepository;
  let service: GetHousesService;

  beforeEach(async () => {
    houseRepository = new InMemoryHouseRepository();
    userRepository = new InMemoryUserRepository();
    locationRepository = new InMemoryLocationRepository();
    typeRepository = new InMemoryTypeRepository();
    addressRepository = new InMemoryAddressRepository();
    service = new GetHousesService(houseRepository);

    await new UserFactory(userRepository).make({});
    await new LocationFactory(locationRepository).make({});
    await new TypeFactory(typeRepository).make({});
    await new AddressFactory(addressRepository).make({});
    await new HouseFactory(houseRepository).make({});
  });

  it('should be able to get all the houses', async () => {
    const { houses } = await service.execute({});

    expect(houses).toHaveLength(1);
  });

  it('should be able to search the houses by title', async () => {
    await new AddressFactory(addressRepository).make({
      id: 'address-02',
      street: 'street-02',
    });
    await new HouseFactory(houseRepository).make({
      addressId: 'address-02',
      title: 'search-title',
    });

    const { houses } = await service.execute({ title: 'search-title' });

    expect(houses).toHaveLength(1);
    expect(houses[0]).toEqual(
      expect.objectContaining({ title: 'search-title' }),
    );
  });

  it('should be able to search the houses by location', async () => {
    await new AddressFactory(addressRepository).make({
      id: 'address-02',
      street: 'street-02',
    });
    await new LocationFactory(locationRepository).make({ id: 'location-02' });
    await new HouseFactory(houseRepository).make({
      addressId: 'address-02',
      locationId: 'location-02',
    });

    const { houses } = await service.execute({ locationId: 'location-02' });

    expect(houses).toHaveLength(1);
    expect(houses[0]).toEqual(
      expect.objectContaining({ locationId: 'location-02' }),
    );
  });

  it('should be able to search the houses by type', async () => {
    await new AddressFactory(addressRepository).make({
      id: 'address-02',
      street: 'street-02',
    });
    await new TypeFactory(typeRepository).make({ id: 'type-02' });
    await new HouseFactory(houseRepository).make({
      addressId: 'address-02',
      typeId: 'type-02',
    });

    const { houses } = await service.execute({ typeId: 'type-02' });

    expect(houses).toHaveLength(1);
    expect(houses[0]).toEqual(expect.objectContaining({ typeId: 'type-02' }));
  });
});
