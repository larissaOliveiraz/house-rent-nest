import { UserRepository } from '@application/users/user.repository';
import { BadRequestException, Injectable } from '@nestjs/common';

type CreateUserRequest = {
  name: string;
  email: string;
  password: string;
  role?: 'CLIENT' | 'ADMIN';
};

@Injectable()
export class CreateUserService {
  constructor(private userRepository: UserRepository) {}

  async execute(data: CreateUserRequest) {
    const userExists = await this.userRepository.findByEmail(data.email);

    if (userExists) {
      throw new BadRequestException('This email is already registered.');
    }

    const user = await this.userRepository.create(data);

    return { user };
  }
}
