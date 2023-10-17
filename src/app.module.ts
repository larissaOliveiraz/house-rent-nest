import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './application/users/users.module';
import { TesModule } from './tes/tes.module';

@Module({
  imports: [DatabaseModule, UsersModule, TesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
