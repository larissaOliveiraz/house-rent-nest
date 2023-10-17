import { Prisma, User } from '@prisma/client';

export abstract class UserRepository {
  abstract findByEmail(email: string): Promise<User | null>;
  abstract create(user: Prisma.UserCreateInput): Promise<User>;
}
