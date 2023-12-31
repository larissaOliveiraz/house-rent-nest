import {
  CheckAddressDTO,
  CreateAddressDTO,
  UpdateAddressDTO,
} from '@common/dtos/house.dto';
import { Address } from '@domain/house/address/address.entity';
import { AddressRepository } from '@domain/house/address/address.repository';
import { randomUUID } from 'crypto';

export class InMemoryAddressRepository implements AddressRepository {
  addresses: Address[] = [];

  async findById(id: string) {
    const address = this.addresses.find((item) => item.id === id);
    return address ? address : null;
  }

  async findFullAddress(data: CheckAddressDTO) {
    const address = this.addresses.find(
      (item) =>
        item.street === data.street &&
        item.number === data.number &&
        item.city === data.city &&
        item.state === data.state,
    );

    return address ? address : null;
  }

  async create(data: CreateAddressDTO) {
    const address: Address = {
      id: data.id ? data.id : randomUUID(),
      street: data.street,
      number: data.number,
      city: data.city,
      state: data.state,
    };

    this.addresses.push(address);

    return address;
  }

  async update(id: string, data: UpdateAddressDTO) {
    const addressIndex = this.addresses.findIndex((item) => item.id === id);

    const updatedAddress: Address = {
      id: this.addresses[addressIndex].id,
      street: data.street,
      number: data.number,
      city: data.city,
      state: data.state,
    };

    this.addresses.splice(addressIndex, 1, updatedAddress);

    return updatedAddress;
  }

  async deleteById(id: string) {
    const addressIndex = this.addresses.findIndex((item) => item.id === id);

    this.addresses.splice(addressIndex, 1);

    return this.addresses[addressIndex];
  }
}
