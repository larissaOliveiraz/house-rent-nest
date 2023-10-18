import { InMemoryUserRepository } from '@test/repositories/in-memory-user-repository.repository';
import { SignInService } from './sign-in.service';
import { JwtService } from '@nestjs/jwt';
import { hash } from 'bcryptjs';
import { InvalidCredentials } from '@domain/exceptions/invalid-credentialst.exception';

describe('Sign In Service', () => {
  let userRepository: InMemoryUserRepository;
  let jwtService: JwtService;
  let service: SignInService;

  beforeEach(async () => {
    userRepository = new InMemoryUserRepository();
    jwtService = new JwtService();
    service = new SignInService(userRepository, jwtService);
  });

  it('should be able to sign in a user', async () => {
    await userRepository.create({
      name: 'user-01',
      email: 'user@email.com',
      password: await hash('123', 6),
    });

    const { user } = await service.verifyCredentials({
      email: 'user@email.com',
      password: '123',
    });

    expect(user.id).toEqual(expect.any(String));
  });

  it('should not be able to sign in a user with invalid email', async () => {
    await userRepository.create({
      name: 'user-01',
      email: 'user@email.com',
      password: await hash('123', 6),
    });

    await expect(() =>
      service.verifyCredentials({
        email: 'wrong@email.com',
        password: '123',
      }),
    ).rejects.toBeInstanceOf(InvalidCredentials);
  });

  it('should not be able to sign in a user with invalid password', async () => {
    await userRepository.create({
      name: 'user-01',
      email: 'user@email.com',
      password: await hash('123', 6),
    });

    await expect(() =>
      service.verifyCredentials({
        email: 'user@email.com',
        password: 'wrong-password',
      }),
    ).rejects.toBeInstanceOf(InvalidCredentials);
  });
});
