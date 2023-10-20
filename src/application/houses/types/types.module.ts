import { Module } from '@nestjs/common';
import { TypesController } from './types.controller';
import { CreateTypeService } from '@domain/house/types/services/create-type.service';
import { DatabaseModule } from '@database/database.module';
import { UsersModule } from '@application/users/users.module';
import { DeleteTypeService } from '@domain/house/types/services/delete-type.service';

@Module({
  imports: [DatabaseModule, UsersModule],
  controllers: [TypesController],
  providers: [CreateTypeService, DeleteTypeService],
})
export class TypesModule {}
