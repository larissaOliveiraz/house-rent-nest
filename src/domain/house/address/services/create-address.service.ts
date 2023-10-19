import { EntityAlreadyExistsException } from '@domain/@exceptions/entity-already-exists.exception';
import { AddressRepository } from '../address.repository';
import { Injectable } from '@nestjs/common';

type CreateAddressRequest = {
  street: string;
  number: string;
  city: string;
  state: string;
};

@Injectable()
export class CreateAddressService {
  constructor(private addressRepository: AddressRepository) {}

  async execute(data: CreateAddressRequest) {
    const addressExists = await this.addressRepository.findFullAddress(data);

    if (addressExists) {
      throw new EntityAlreadyExistsException('Address');
    }

    const address = await this.addressRepository.create(data);

    return { address };
  }
}
