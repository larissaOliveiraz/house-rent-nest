import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { CreateUserService } from '@domain/users/services/create-user.service';
import { DatabaseModule } from 'src/database/database.module';
import { GetUserProfileService } from '../../domain/users/services/get-user-profile.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [CreateUserService, GetUserProfileService],
  exports: [GetUserProfileService],
})
export class UsersModule {}
