import { DatabaseModule } from '@database/database.module';
import { Module } from '@nestjs/common';
import { LocationsController } from './locations.controller';
import { CreateLocationService } from '@domain/house/locations/services/create-location.service';
import { UsersModule } from '@application/users/users.module';
import { DeleteLocationService } from '@domain/house/locations/services/delete-location.service';

@Module({
  imports: [DatabaseModule, UsersModule],
  controllers: [LocationsController],
  providers: [CreateLocationService, DeleteLocationService],
})
export class LocationsModule {}
