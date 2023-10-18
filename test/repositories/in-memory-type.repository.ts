import { CreateTypeDTO } from '@common/dtos/house.dto';
import { Type } from '@domain/house/type/type.entity';
import { TypeRepository } from '@domain/house/type/type.repository';
import { randomUUID } from 'crypto';

export class InMemoryTypeRepository implements TypeRepository {
  types: Type[] = [];

  async findByDescription(description: string) {
    const type = this.types.find((item) => item.description === description);

    return type ? type : null;
  }

  async create(type: CreateTypeDTO) {
    const newType: Type = {
      id: type.id ? type.id : randomUUID(),
      description: type.description,
    };

    this.types.push(newType);

    return newType;
  }
}
