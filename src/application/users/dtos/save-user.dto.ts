export class SaveUserDTO {
  name: string;
  email: string;
  password: string;
  role?: 'CLIENT' | 'ADMIN';
}
