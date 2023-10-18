import { UsersModule } from '@application/users/users.module';
import { DatabaseModule } from '@database/database.module';
import { SignInService } from '@domain/auth/sign-in.service';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [SignInService],
})
export class AuthModule {}
