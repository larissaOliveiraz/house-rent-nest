import { Injectable } from '@nestjs/common';
import { TypeRepository } from '../types.repository';
import { EntityNotFoundException } from '@domain/@exceptions/entity-not-found.exception';

type DeleteTypeRequest = {
  id: string;
};

@Injectable()
export class DeleteTypeService {
  constructor(private typeRepository: TypeRepository) {}

  async execute({ id }: DeleteTypeRequest) {
    const type = await this.typeRepository.findById(id);

    if (!type) {
      throw new EntityNotFoundException('Type', id);
    }

    await this.typeRepository.deleteById(id);

    return { type };
  }
}
