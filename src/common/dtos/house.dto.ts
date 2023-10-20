export class CreateTypeDTO {
  id?: string;
  description: string;
}

export class CreateLocationDTO {
  id?: string;
  description: string;
}

class BaseAddressDTO {
  street: string;
  number: string;
  city: string;
  state: string;
}

export class CreateAddressDTO extends BaseAddressDTO {
  id?: string;
}

export class UpdateAddressDTO extends BaseAddressDTO {}

export class CheckAddressDTO extends BaseAddressDTO {}

export class CreateHouseDTO {
  id?: string;
  title: string;
  description: string;
  dailyPrice: number;
  dailyFine: number;

  userId: string;
  typeId: string;
  locationId: string;
  addressId: string;
}
