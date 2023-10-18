import { UserRepository } from '@domain/repositories/user.repository';
import { Injectable, NotFoundException } from '@nestjs/common';

type GetUserProfileRequest = {
  id: string;
};

@Injectable()
export class GetUserProfileService {
  constructor(private userRepository: UserRepository) {}

  async execute({ id }: GetUserProfileRequest) {
    const profile = await this.userRepository.findById(id);

    if (!profile) {
      throw new NotFoundException('User not found.');
    }

    return { profile };
  }
}
