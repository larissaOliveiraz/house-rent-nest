import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './application/users/users.module';
import { AuthModule } from './application/auth/auth.module';

@Module({
  imports: [DatabaseModule, UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
