import { CreateHouseDTO } from '@common/dtos/house.dto';
import { House } from './houses.entity';

export abstract class HouseRepository {
  abstract findByAddress(addressId: string): Promise<House | null>;
  abstract create(data: CreateHouseDTO): Promise<House>;
}
