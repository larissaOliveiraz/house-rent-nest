import { UsersModule } from '@application/users/users.module';
import { DatabaseModule } from '@database/database.module';
import { CreateAddressService } from '@domain/house/address/services/create-address.service';
import { Module } from '@nestjs/common';
import { AddressController } from './address.controller';
import { FindAddressService } from '@domain/house/address/services/find-address.service';
import { DeleteAddressService } from '@domain/house/address/services/delete-address.service';
import { UpdateAddressService } from '@domain/house/address/services/update-address.service';

@Module({
  imports: [DatabaseModule, UsersModule],
  controllers: [AddressController],
  providers: [
    CreateAddressService,
    FindAddressService,
    UpdateAddressService,
    DeleteAddressService,
  ],
})
export class AddressModule {}
