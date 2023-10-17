import { UserRepository } from '@domain/repositories/user.repository';
import { BadRequestException, Injectable } from '@nestjs/common';
import { hash } from 'bcryptjs';
import { Role } from 'src/shared/enums/role.enum';

type CreateUserRequest = {
  name: string;
  email: string;
  password: string;
  role?: Role;
};

@Injectable()
export class CreateUserService {
  constructor(private userRepository: UserRepository) {}

  async execute({ name, email, password, role }: CreateUserRequest) {
    const userExists = await this.userRepository.findByEmail(email);

    if (userExists) {
      throw new BadRequestException('This email is already registered.');
    }

    const passwordHash = await hash(password, 6);

    const user = await this.userRepository.create({
      name,
      email,
      password: passwordHash,
      role: role ? role : 'CLIENT',
    });

    return { user };
  }
}
