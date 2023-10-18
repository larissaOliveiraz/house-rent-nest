import { User } from '@domain/user/user.entity';
import { CreateUserDTO } from '@common/dtos/user.dto';

export abstract class UserRepository {
  abstract findById(id: string): Promise<User | null>;
  abstract findByEmail(email: string): Promise<User | null>;
  abstract create(user: CreateUserDTO): Promise<User>;
}
