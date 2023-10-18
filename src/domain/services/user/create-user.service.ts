import { EntityAlreadyExistsException } from '@domain/exceptions/entity-already-exists.exception';
import { UserRepository } from '@domain/repositories/user.repository';
import { BadRequestException, Injectable } from '@nestjs/common';
import { Role } from '@shared/enums/role.enum';
import { hash } from 'bcryptjs';

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
      throw new EntityAlreadyExistsException('User');
    }

    const passwordHash = await hash(password, 6);

    const user = await this.userRepository.create({
      name,
      email,
      password: passwordHash,
      role: role ? role : Role.CLIENT,
    });

    return { user };
  }
}
