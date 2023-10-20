import { Injectable } from '@nestjs/common';
import { AddressRepository } from '../address.repository';
import { EntityNotFoundException } from '@domain/@exceptions/entity-not-found.exception';

type DeleteAddressRequest = {
  id: string;
};

@Injectable()
export class DeleteAddressService {
  constructor(private addressRepository: AddressRepository) {}

  async execute({ id }: DeleteAddressRequest) {
    const address = await this.addressRepository.findById(id);

    if (!address) {
      throw new EntityNotFoundException('Address', id);
    }

    await this.addressRepository.deleteById(id);

    return { address };
  }
}
