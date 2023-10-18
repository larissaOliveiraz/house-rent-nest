import { Role } from '@common/enums/role.enum';

export class CreateUserDTO {
  id?: string;
  name: string;
  email: string;
  password: string;
  role?: Role;
}
