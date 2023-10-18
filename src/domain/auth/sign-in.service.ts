import { InvalidCredentials } from '@domain/exceptions/invalid-credentialst.exception';
import { UserRepository } from '@domain/user/user.repository';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';

type SignInRequest = {
  email: string;
  password: string;
};

@Injectable()
export class SignInService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async execute({ email, password }: SignInRequest) {
    const { user } = await this.verifyCredentials({ email, password });

    const payload = { sub: user.id };
    const token = await this.jwtService.signAsync(payload);

    return { token };
  }

  async verifyCredentials({ email, password }: SignInRequest) {
    const user = await this.userRepository.findByEmail(email);
    if (!user) throw new InvalidCredentials();

    const passwordCorrect = await compare(password, user.password);
    if (!passwordCorrect) throw new InvalidCredentials();

    return { user };
  }
}
