import { InMemoryUserRepository } from '@test/repositories/in-memory-user-repository.repository';
import { CreateUserService } from './create-user.service';
import { EntityAlreadyExistsException } from '@domain/exceptions/entity-already-exists.exception';

describe('Create User Service', () => {
  let userRepository: InMemoryUserRepository;
  let service: CreateUserService;

  beforeEach(async () => {
    userRepository = new InMemoryUserRepository();
    service = new CreateUserService(userRepository);
  });

  it('should be able to create a user', async () => {
    const { user } = await service.execute({
      name: 'user-01',
      email: 'user@email.com',
      password: '123',
    });

    expect(user.id).toEqual(expect.any(String));
  });

  it('should not be able to create a user if the email is already registered', async () => {
    await service.execute({
      name: 'user-01',
      email: 'user@email.com',
      password: '123',
    });

    await expect(() =>
      service.execute({
        name: 'user-02',
        email: 'user@email.com',
        password: '123',
      }),
    ).rejects.toBeInstanceOf(EntityAlreadyExistsException);
  });
});
