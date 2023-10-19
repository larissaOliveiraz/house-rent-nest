import { CreateLocationDTO } from '@common/dtos/house.dto';
import { Location } from './locations.entity';

export abstract class LocationRepository {
  abstract findByDescription(description: string): Promise<Location | null>;
  abstract create(data: CreateLocationDTO): Promise<Location>;
}
