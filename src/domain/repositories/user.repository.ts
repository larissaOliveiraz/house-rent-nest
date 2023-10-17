import { CreateUserDTO, UserDTO } from '@shared/dtos/user.dto';

export abstract class UserRepository {
  abstract findById(id: string): Promise<UserDTO | null>;
  abstract findByEmail(email: string): Promise<UserDTO | null>;
  abstract create(user: CreateUserDTO): Promise<UserDTO>;
}
