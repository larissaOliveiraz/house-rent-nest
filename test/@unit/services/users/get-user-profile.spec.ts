import { InMemoryUserRepository } from '@test/repositories/in-memory-user.repository';
import { GetUserProfileService } from '../../../../src/domain/users/services/get-user-profile.service';
import { EntityNotFoundException } from '@domain/@exceptions/entity-not-found.exception';

describe('Create User Service', () => {
  let userRepository: InMemoryUserRepository;
  let service: GetUserProfileService;

  beforeEach(async () => {
    userRepository = new InMemoryUserRepository();
    service = new GetUserProfileService(userRepository);
  });

  it('should be able to get the user profile', async () => {
    await userRepository.create({
      id: 'user-01',
      name: 'new-user',
      email: 'user@email.com',
      password: '123',
    });

    const { profile } = await service.execute({ id: 'user-01' });

    expect(profile.name).toEqual('new-user');
  });

  it('should not be able to get the user profile if the id does not exist', async () => {
    await expect(() =>
      service.execute({ id: 'non-existing-id' }),
    ).rejects.toBeInstanceOf(EntityNotFoundException);
  });
});
