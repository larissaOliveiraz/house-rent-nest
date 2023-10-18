import { CreateTypeDTO } from '@common/dtos/house.dto';
import { Type } from './types.entity';

export abstract class TypeRepository {
  abstract findByDescription(description: string): Promise<Type | null>;
  abstract create(data: CreateTypeDTO): Promise<Type>;
}
