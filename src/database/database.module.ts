import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UserRepository } from '@domain/users/users.repository';
import { PrismaUserRepository } from './prisma/repositories/prisma-user.repository';
import { TypeRepository } from '@domain/house/types/types.repository';
import { PrismaTypeRepository } from './prisma/repositories/prisma-type.repository';
import { PrismaLocationRepository } from './prisma/repositories/prisma-location.repository';
import { LocationRepository } from '@domain/house/locations/locations.repository';
import { AddressRepository } from '@domain/house/address/address.repository';
import { PrismaAddressRepository } from './prisma/repositories/prisma-address.repository';
import { HouseRepository } from '@domain/house/@this/houses.repository';
import { PrismaHouseRepository } from './prisma/repositories/prisma-house.repository';

@Module({
  providers: [
    PrismaService,
    { provide: UserRepository, useClass: PrismaUserRepository },
    { provide: TypeRepository, useClass: PrismaTypeRepository },
    { provide: LocationRepository, useClass: PrismaLocationRepository },
    { provide: AddressRepository, useClass: PrismaAddressRepository },
    { provide: HouseRepository, useClass: PrismaHouseRepository },
  ],
  exports: [
    PrismaService,
    UserRepository,
    TypeRepository,
    LocationRepository,
    AddressRepository,
    HouseRepository,
  ],
})
export class DatabaseModule {}
