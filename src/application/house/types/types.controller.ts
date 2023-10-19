import { Roles } from '@application/@decorators/roles.decorator';
import { AuthGuard } from '@application/@guards/auth.guard';
import { RoleGuard } from '@application/@guards/role.guard';
import { CreateTypeDTO } from '@common/dtos/house.dto';
import { Role } from '@common/enums/role.enum';
import { CreateTypeService } from '@domain/house/types/services/create-type.service';
import { DeleteTypeService } from '@domain/house/types/services/delete-type.service';
import {
  Body,
  Controller,
  Delete,
  HttpCode,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';

@Controller('types')
export class TypesController {
  constructor(
    private createTypeService: CreateTypeService,
    private deleteTypeService: DeleteTypeService,
  ) {}

  @Post()
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard, RoleGuard)
  async create(@Body() type: CreateTypeDTO) {
    return this.createTypeService.execute({ description: type.description });
  }

  @Delete(':id')
  @HttpCode(204)
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard, RoleGuard)
  async delete(@Param('id') id: string) {
    await this.deleteTypeService.execute({ id });
  }
}
