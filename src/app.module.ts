import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './application/users/users.module';
import { AuthModule } from './application/auth/auth.module';
import { TypesModule } from './application/houses/types/types.module';
import { LocationsModule } from './application/houses/locations/locations.module';
import { AddressModule } from './application/houses/address/address.module';

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    AuthModule,
    TypesModule,
    LocationsModule,
    AddressModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
