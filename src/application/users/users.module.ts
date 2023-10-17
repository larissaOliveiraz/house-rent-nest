import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { CreateUserService } from '@application/users/services/create-user.service';
import { DatabaseModule } from 'src/database/database.module';
import { GetUserProfileService } from './services/get-user-profile.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [CreateUserService, GetUserProfileService],
})
export class UsersModule {}
