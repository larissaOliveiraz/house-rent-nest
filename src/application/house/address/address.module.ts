import { UsersModule } from '@application/users/users.module';
import { DatabaseModule } from '@database/database.module';
import { CreateAddressService } from '@domain/house/address/services/create-address.service';
import { Module } from '@nestjs/common';
import { AddressController } from './address.controller';

@Module({
  imports: [DatabaseModule, UsersModule],
  providers: [CreateAddressService],
  controllers: [AddressController],
})
export class AddressModule {}
