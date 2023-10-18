import { EntityAlreadyExistsException } from '@domain/exceptions/entity-already-exists.exception';
import { TypeRepository } from '../type.repository';

type CreateTypeRequest = {
  description: string;
};

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
