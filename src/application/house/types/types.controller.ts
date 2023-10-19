import { Roles } from '@application/@decorators/roles.decorator';
import { AuthGuard } from '@application/@guards/auth.guard';
import { RoleGuard } from '@application/@guards/role.guard';
import { CreateTypeDTO } from '@common/dtos/house.dto';
import { Role } from '@common/enums/role.enum';
import { CreateTypeService } from '@domain/house/type/services/create-type.service';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';

@Controller('types')
export class TypesController {
  constructor(private createTypeService: CreateTypeService) {}

  @Post()
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard, RoleGuard)
  async create(@Body() type: CreateTypeDTO) {
    return this.createTypeService.execute({ description: type.description });
  }
}
