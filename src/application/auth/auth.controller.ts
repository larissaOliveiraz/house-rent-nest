import { SignInDTO } from '@common/dtos/auth.dto';
import { SignInService } from '@domain/auth/sign-in.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private signInService: SignInService) {}

  @Post('/sign-in')
  async signIn(@Body() { email, password }: SignInDTO) {
    return this.signInService.execute({ email, password });
  }
}
