import { User } from '@prisma/client';
import { Role } from '@shared/enums/role.enum';

export class PrismaMapper {
  static toDomain(user: User) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role as Role,
      createdAt: user.created_at,
    };
  }
}
