import { CreateTypeDTO } from '@common/dtos/house.dto';
import { CreateTypeService } from '@domain/house/type/services/create-type.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('types')
export class TypesController {
  constructor(private createTypeService: CreateTypeService) {}

  @Post()
  async create(@Body() type: CreateTypeDTO) {
    return this.createTypeService.execute({ description: type.description });
  }
}
