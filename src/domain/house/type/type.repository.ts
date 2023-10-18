import { CreateTypeDTO } from '@common/dtos/house.dto';
import { Type } from './type.entity';

export abstract class TypeRepository {
  abstract findByDescription(description: string): Promise<Type | null>;
  abstract create(type: CreateTypeDTO): Promise<Type>;
}
