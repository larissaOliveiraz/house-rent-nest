import { CreateTypeDTO } from '@common/dtos/house.dto';
import { Type } from '@domain/house/types/types.entity';
import { TypeRepository } from '@domain/house/types/types.repository';
import { randomUUID } from 'crypto';

export class InMemoryTypeRepository implements TypeRepository {
  types: Type[] = [];

  async findById(id: string) {
    const type = this.types.find((item) => item.id === id);

    return type ? type : null;
  }

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

  async deleteById(id: string) {
    const typeIndex = this.types.findIndex((item) => item.id === id);

    this.types.splice(typeIndex, 1);

    return this.types[typeIndex];
  }
}
