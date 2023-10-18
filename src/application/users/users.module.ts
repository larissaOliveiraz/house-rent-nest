import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { CreateUserService } from '@domain/services/user/create-user.service';
import { DatabaseModule } from 'src/database/database.module';
import { GetUserProfileService } from '../../domain/services/user/get-user-profile.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [CreateUserService, GetUserProfileService],
})
export class UsersModule {}
