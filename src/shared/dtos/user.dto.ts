import { Role } from '@shared/enums/role.enum';

export class UserDTO {
  id: string;
  name: string;
  email: string;
  password: string;
  role?: Role;
  createdAt: Date;
}

export class CreateUserDTO {
  id?: string;
  name: string;
  email: string;
  password: string;
  role?: Role;
}
