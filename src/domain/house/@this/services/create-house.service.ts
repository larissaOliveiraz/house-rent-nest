import { CreateHouseDTO } from '@common/dtos/house.dto';
import { Injectable } from '@nestjs/common';
import { HouseRepository } from '../houses.repository';
import { UserRepository } from '@domain/users/users.repository';
import { TypeRepository } from '@domain/house/types/types.repository';
import { LocationRepository } from '@domain/house/locations/locations.repository';
import { AddressRepository } from '@domain/house/address/address.repository';
import { EntityNotFoundException } from '@domain/@exceptions/entity-not-found.exception';

type CreateHouseRequest = {
  title: string;
  description: string;
  dailyPrice: number;
  dailyFine: number;

  userId: string;
  typeId: string;
  locationId: string;
  addressId: string;
};

@Injectable()
export class CreateHouseService {
  constructor(
    private houseRepository: HouseRepository,
    private userRepository: UserRepository,
    private typeRepository: TypeRepository,
    private locationRepository: LocationRepository,
    private addressRepository: AddressRepository,
  ) {}

  async execute(data: CreateHouseRequest) {
    const user = await this.userRepository.findById(data.userId);
    if (!user) throw new EntityNotFoundException('User', data.userId);

    const type = await this.typeRepository.findById(data.typeId);
    if (!type) throw new EntityNotFoundException('Type', data.typeId);

    const location = await this.locationRepository.findById(data.locationId);
    if (!location)
      throw new EntityNotFoundException('Location', data.locationId);

    const address = await this.addressRepository.findById(data.addressId);
    if (!address) throw new EntityNotFoundException('Address', data.addressId);

    const house = await this.houseRepository.create(data);

    return { house };
  }
}
