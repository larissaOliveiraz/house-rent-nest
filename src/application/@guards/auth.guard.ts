import { GetUserProfileService } from '@domain/users/services/get-user-profile.service';
import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private getUserService: GetUserProfileService,
  ) {}

  async canActivate(context: ExecutionContext) {
    const request = await context.switchToHttp().getRequest();
    const { authorization } = request.headers;

    if (!authorization) {
      throw new HttpException('Unauthorized.', HttpStatus.UNAUTHORIZED);
    }

    const token = authorization.split(' ')[1];

    try {
      const user = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET,
      });

      const { profile } = await this.getUserService.execute({ id: user.sub });
      request['user'] = profile;

      return true;
    } catch (error) {
      throw new HttpException('Invalid token.', HttpStatus.UNAUTHORIZED);
    }
  }
}
