import { Prisma, User } from '@prisma/client';

export abstract class UserRepository {
  abstract findById(id: string): Promise<User | null>;
  abstract findByEmail(email: string): Promise<User | null>;
  abstract create(user: Prisma.UserCreateInput): Promise<User>;
}
