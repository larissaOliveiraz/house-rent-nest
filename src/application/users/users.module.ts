import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { CreateUserService } from '@application/users/services/create-user.service';

@Module({
  controllers: [UsersController],
  providers: [CreateUserService],
})
export class UsersModule {}
