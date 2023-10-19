import { Roles } from '@application/@decorators/roles.decorator';
import { AuthGuard } from '@application/@guards/auth.guard';
import { RoleGuard } from '@application/@guards/role.guard';
import { CreateLocationDTO } from '@common/dtos/house.dto';
import { Role } from '@common/enums/role.enum';
import { CreateLocationService } from '@domain/house/locations/services/create-location.service';
import { DeleteLocationService } from '@domain/house/locations/services/delete-location.service';
import {
  Body,
  Controller,
  Delete,
  HttpCode,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';

@Controller('locations')
export class LocationsController {
  constructor(
    private createLocationService: CreateLocationService,
    private deleteLocationService: DeleteLocationService,
  ) {}

  @Post()
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard, RoleGuard)
  async create(@Body() data: CreateLocationDTO) {
    const { location } = await this.createLocationService.execute({
      description: data.description,
    });

    return location;
  }

  @Delete(':id')
  @HttpCode(204)
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard, RoleGuard)
  async delete(@Param('id') id: string) {
    await this.deleteLocationService.execute({ id });
  }
}
