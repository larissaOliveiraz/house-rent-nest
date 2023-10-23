import { Injectable } from '@nestjs/common';
import { HouseRepository } from '../houses.repository';
import { EntityNotFoundException } from '@domain/@exceptions/entity-not-found.exception';

type FindHouseRequest = {
  id: string;
};

@Injectable()
export class FindHouseService {
  constructor(private houseRepository: HouseRepository) {}

  async execute({ id }: FindHouseRequest) {
    const house = await this.houseRepository.findById(id);

    if (!house) {
      throw new EntityNotFoundException('House', id);
    }

    return { house };
  }
}
