import { EntityAlreadyExistsException } from '@domain/@exceptions/entity-already-exists.exception';
import { TypeRepository } from '../types.repository';
import { Injectable } from '@nestjs/common';

type CreateTypeRequest = {
  description: string;
};

@Injectable()
export class CreateTypeService {
  constructor(private typeRepository: TypeRepository) {}

  async execute({ description }: CreateTypeRequest) {
    const typeExists = await this.typeRepository.findByDescription(description);

    if (typeExists) {
      throw new EntityAlreadyExistsException('Type');
    }

    const type = await this.typeRepository.create({ description });

    return { type };
  }
}
