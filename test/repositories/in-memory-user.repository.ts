import { UserRepository } from '@domain/users/users.repository';
import { CreateUserDTO } from '@common/dtos/user.dto';
import { Role } from '@common/enums/role.enum';
import { randomUUID } from 'crypto';
import { User } from '@domain/users/users.entity';

export class InMemoryUserRepository implements UserRepository {
  users: User[] = [];

  async findById(id: string) {
    const user = this.users.find((item) => item.id === id);

    return user ? user : null;
  }

  async findByEmail(email: string) {
    const user = this.users.find((item) => item.email === email);

    return user ? user : null;
  }

  async create(user: CreateUserDTO) {
    const newUser: User = {
      id: user.id ? user.id : randomUUID(),
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role ? user.role : Role.CLIENT,
      createdAt: new Date(),
    };

    this.users.push(newUser);

    return newUser;
  }
}
