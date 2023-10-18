import { UserRepository } from '@domain/repositories/user.repository';
import { CreateUserDTO, UserDTO } from '@shared/dtos/user.dto';
import { Role } from '@shared/enums/role.enum';
import { randomUUID } from 'crypto';

export class InMemoryUserRepository implements UserRepository {
  users: UserDTO[] = [];

  async findById(id: string) {
    const user = this.users.find((item) => item.id === id);

    return user ? user : null;
  }

  async findByEmail(email: string) {
    const user = this.users.find((item) => item.email === email);

    return user ? user : null;
  }

  async create(user: CreateUserDTO) {
    const newUser: UserDTO = {
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
