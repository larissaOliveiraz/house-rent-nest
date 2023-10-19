import { CreateLocationDTO } from '@common/dtos/house.dto';
import { Location } from './locations.entity';

export abstract class LocationRepository {
  abstract findById(id: string): Promise<Location | null>;
  abstract findByDescription(description: string): Promise<Location | null>;
  abstract create(data: CreateLocationDTO): Promise<Location>;
  abstract deleteById(id: string): Promise<Location>;
}
