import { InMemoryUserRepository } from '@test/repositories/in-memory-user-repository.repository';
import { CreateUserService } from './create-user.service';

describe('Create User Service', () => {
  let userRepository: InMemoryUserRepository;
  let service: CreateUserService;

  beforeEach(async () => {
    userRepository = new InMemoryUserRepository();
    service = new CreateUserService(userRepository);
  });

  it('should be able to create a user', async () => {
    const { user } = await service.execute({
      name: 'new_user',
      email: 'user@email.com',
      password: '123',
    });

    expect(user.id).toEqual(expect.any(String));
  });
});
