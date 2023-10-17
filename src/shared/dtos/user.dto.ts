import { Role } from '@shared/enums/role.enum';

export class CreateUserDTO {
  name: string;
  email: string;
  password: string;
  role?: Role;
}
