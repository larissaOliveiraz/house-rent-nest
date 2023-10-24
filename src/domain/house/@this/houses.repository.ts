import { CreateHouseDTO } from '@common/dtos/house.dto';
import { House } from './houses.entity';

export abstract class HouseRepository {
  abstract findById(id: string): Promise<House | null>;
  abstract findByAddress(addressId: string): Promise<House | null>;
  abstract findManyByLocation(locationId: string): Promise<House[]>;
  abstract findManyByType(typeId: string): Promise<House[]>;
  abstract findManyByTitle(title: string): Promise<House[]>;
  abstract findAll(): Promise<House[]>;
  abstract create(data: CreateHouseDTO): Promise<House>;
}
