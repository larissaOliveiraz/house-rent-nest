import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { CreateUserService } from '@domain/user/services/create-user.service';
import { DatabaseModule } from 'src/database/database.module';
import { GetUserProfileService } from '../../domain/user/services/get-user-profile.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [CreateUserService, GetUserProfileService],
})
export class UsersModule {}
