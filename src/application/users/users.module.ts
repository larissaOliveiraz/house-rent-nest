import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { CreateUserService } from '@application/users/services/create-user.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [CreateUserService],
})
export class UsersModule {}
