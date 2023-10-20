import { CheckAddressDTO, CreateAddressDTO } from '@common/dtos/house.dto';
import { Address } from './address.entity';

export abstract class AddressRepository {
  abstract findById(id: string): Promise<Address | null>;
  abstract findFullAddress(data: CheckAddressDTO): Promise<Address | null>;
  abstract create(data: CreateAddressDTO): Promise<Address>;
  abstract deleteById(id: string): Promise<Address>;
}
