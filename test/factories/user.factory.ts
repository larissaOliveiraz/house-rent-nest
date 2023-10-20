import { CreateUserDTO } from '@common/dtos/user.dto';
import { Role } from '@common/enums/role.enum';
import { InMemoryUserRepository } from '@test/repositories/in-memory-user.repository';

type UserFactoryType = Partial<CreateUserDTO>;

export class UserFactory {
  constructor(private userRepository: InMemoryUserRepository) {}

  async make({ id, name, email, password, role }: UserFactoryType) {
    const user = await this.userRepository.create({
      id: id ?? 'user-01',
      name: name ?? 'new-user',
      email: email ?? 'user@email.com',
      password: password ?? '123',
      role: role ?? Role.CLIENT,
    });

    return user;
  }
}
