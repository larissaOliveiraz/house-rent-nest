import { Roles } from '@application/@decorators/roles.decorator';
import { AuthGuard } from '@application/@guards/auth.guard';
import { RoleGuard } from '@application/@guards/role.guard';
import { CreateHouseDTO } from '@common/dtos/house.dto';
import { Role } from '@common/enums/role.enum';
import { CreateHouseService } from '@domain/house/@this/services/create-house.service';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';

@Controller('houses')
export class HousesController {
  constructor(private createHouseService: CreateHouseService) {}

  @Post()
  @Roles(Role.LANDLORD)
  @UseGuards(AuthGuard, RoleGuard)
  async create(@Body() data: CreateHouseDTO) {
    return this.createHouseService.execute(data);
  }
}
