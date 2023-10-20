import { Injectable } from '@nestjs/common';
import { AddressRepository } from '../address.repository';
import { EntityNotFoundException } from '@domain/@exceptions/entity-not-found.exception';

type FindAddressRequest = {
  id: string;
};

@Injectable()
export class FindAddressService {
  constructor(private addressRepository: AddressRepository) {}

  async execute({ id }: FindAddressRequest) {
    const address = await this.addressRepository.findById(id);

    if (!address) {
      throw new EntityNotFoundException('Address', id);
    }

    return { address };
  }
}
