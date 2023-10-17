import { User } from '@prisma/client';
import { SaveUserDTO } from './dtos/save-user.dto';

export abstract class UserRepository {
  abstract findByEmail(email: string): Promise<User | null>;
  abstract create(user: SaveUserDTO): Promise<User>;
}
