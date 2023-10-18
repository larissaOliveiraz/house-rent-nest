import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext) {
    const request: Request = await context.switchToHttp().getRequest();
    const { authorization } = request.headers;

    if (!authorization) {
      throw new HttpException('Unauthorized.', HttpStatus.UNAUTHORIZED);
    }

    const token = authorization.split(' ')[1];

    try {
      const user = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET,
      });

      request['user'] = user;

      return true;
    } catch (error) {
      throw new HttpException('Invalid token.', HttpStatus.UNAUTHORIZED);
    }
  }
}
