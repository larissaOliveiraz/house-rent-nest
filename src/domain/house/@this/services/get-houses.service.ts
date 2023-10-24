import { Injectable } from '@nestjs/common';
import { HouseRepository } from '../houses.repository';

type GetHousesRequest = {
  title?: string;
  locationId?: string;
  typeId?: string;
};

@Injectable()
export class GetHousesService {
  constructor(private houseRepository: HouseRepository) {}

  async execute({ title, locationId, typeId }: GetHousesRequest) {
    if (title) {
      const housesByTitle = await this.houseRepository.findManyByTitle(title);
      return { houses: housesByTitle };
    }

    if (locationId) {
      const housesByLocation =
        await this.houseRepository.findManyByLocation(locationId);
      return { houses: housesByLocation };
    }

    if (typeId) {
      const housesByType = await this.houseRepository.findManyByType(typeId);
      return { houses: housesByType };
    }

    const houses = await this.houseRepository.findAll();
    return { houses };
  }
}
