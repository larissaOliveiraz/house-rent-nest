import { CreateTypeDTO } from '@common/dtos/house.dto';
import { InMemoryTypeRepository } from '@test/repositories/in-memory-type.repository';

type TypeFactoryType = Partial<CreateTypeDTO>;

export class TypeFactory {
  constructor(private typeRepository: InMemoryTypeRepository) {}

  async make({ id, description }: TypeFactoryType) {
    const type = await this.typeRepository.create({
      id: id ?? 'type-01',
      description: description ?? 'new-description',
    });

    return type;
  }
}
