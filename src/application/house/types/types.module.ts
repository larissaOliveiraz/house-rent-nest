import { Module } from '@nestjs/common';
import { TypesController } from './types.controller';
import { CreateTypeService } from '@domain/house/type/services/create-type.service';
import { DatabaseModule } from '@database/database.module';
import { UsersModule } from '@application/users/users.module';

@Module({
  imports: [DatabaseModule, UsersModule],
  controllers: [TypesController],
  providers: [CreateTypeService],
})
export class TypesModule {}
