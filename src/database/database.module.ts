import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UserRepository } from '@domain/users/users.repository';
import { PrismaUserRepository } from './prisma/repositories/prisma-user.repository';
import { TypeRepository } from '@domain/house/types/types.repository';
import { PrismaTypeRepository } from './prisma/repositories/prisma-type.repository';

@Module({
  providers: [
    PrismaService,
    { provide: UserRepository, useClass: PrismaUserRepository },
    { provide: TypeRepository, useClass: PrismaTypeRepository },
  ],
  exports: [PrismaService, UserRepository, TypeRepository],
})
export class DatabaseModule {}
