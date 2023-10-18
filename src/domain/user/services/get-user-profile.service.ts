import { EntityNotFoundException } from '@domain/exceptions/entity-not-found.exception';
import { UserRepository } from '@domain/user/user.repository';
import { Injectable } from '@nestjs/common';

type GetUserProfileRequest = {
  id: string;
};

@Injectable()
export class GetUserProfileService {
  constructor(private userRepository: UserRepository) {}

  async execute({ id }: GetUserProfileRequest) {
    const profile = await this.userRepository.findById(id);

    if (!profile) {
      throw new EntityNotFoundException('User not found.');
    }

    return { profile };
  }
}
