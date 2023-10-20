import { CreateAddressDTO } from '@common/dtos/house.dto';
import { InMemoryAddressRepository } from '@test/repositories/in-memory-address.repository';

type AddressFactoryType = Partial<CreateAddressDTO>;

export class AddressFactory {
  constructor(private addressRepository: InMemoryAddressRepository) {}

  async make({ id, street, number, city, state }: AddressFactoryType) {
    const address = await this.addressRepository.create({
      id: id ?? 'address-01',
      street: street ?? 'new-street',
      number: number ?? '123',
      city: city ?? 'new-city',
      state: state ?? 'new-state',
    });

    return address;
  }
}
