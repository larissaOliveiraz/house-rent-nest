import { UsersModule } from '@application/users/users.module';
import { DatabaseModule } from '@database/database.module';
import { Module } from '@nestjs/common';
import { HousesController } from './houses.controller';
import { CreateHouseService } from '@domain/house/@this/services/create-house.service';
import { FindHouseService } from '@domain/house/@this/services/find-house.service';

@Module({
  imports: [DatabaseModule, UsersModule],
  controllers: [HousesController],
  providers: [CreateHouseService, FindHouseService],
})
export class HousesModule {}
