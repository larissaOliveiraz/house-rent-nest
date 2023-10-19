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

export class CheckAddressDTO extends BaseAddressDTO {}
