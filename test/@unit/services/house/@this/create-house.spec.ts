import { CreateHouseService } from '@domain/house/@this/services/create-house.service';
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
  });
});
