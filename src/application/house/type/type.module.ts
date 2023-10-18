import { DatabaseModule } from '@database/database.module';
import { CreateTypeService } from '@domain/house/type/services/create-type.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule],
  providers: [CreateTypeService],
})
export class TypeModule {}
