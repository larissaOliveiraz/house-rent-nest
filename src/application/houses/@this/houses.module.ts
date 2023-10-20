import { UsersModule } from '@application/users/users.module';
import { DatabaseModule } from '@database/database.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule, UsersModule],
})
export class HousesModule {}
