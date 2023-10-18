import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './application/users/users.module';
import { AuthModule } from './application/auth/auth.module';
import { TypesModule } from './application/house/types/types.module';

@Module({
  imports: [DatabaseModule, UsersModule, AuthModule, TypesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
