import { Module } from '@nestjs/common';
import { DatabaseModule } from './application/database/database.module';
import { UsersModule } from './application/users/users.module';

@Module({
  imports: [DatabaseModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
