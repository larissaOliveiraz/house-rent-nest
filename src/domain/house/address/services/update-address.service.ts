import { Injectable } from '@nestjs/common';
import { AddressRepository } from '../address.repository';
import { EntityNotFoundException } from '@domain/@exceptions/entity-not-found.exception';
import { UpdateAddressDTO } from '@common/dtos/house.dto';
import { EntityAlreadyExistsException } from '@domain/@exceptions/entity-already-exists.exception';

type UpdateAddressRequest = {
  id: string;
  data: UpdateAddressDTO;
};

@Injectable()
export class UpdateAddressService {
  constructor(private addressRepository: AddressRepository) {}

  async execute({ id, data }: UpdateAddressRequest) {
    const address = await this.addressRepository.findById(id);
    if (!address) {
      throw new EntityNotFoundException('Address', id);
    }

    const addressAlreadyExists =
      await this.addressRepository.findFullAddress(data);
    if (addressAlreadyExists) {
      throw new EntityAlreadyExistsException('Address');
    }

    const updatedAddress = await this.addressRepository.update(id, data);

    return { address: updatedAddress };
  }
}
