import { Roles } from '@application/@decorators/roles.decorator';
import { AuthGuard } from '@application/@guards/auth.guard';
import { RoleGuard } from '@application/@guards/role.guard';
import { CreateHouseDTO } from '@common/dtos/house.dto';
import { Role } from '@common/enums/role.enum';
import { CreateHouseService } from '@domain/house/@this/services/create-house.service';
import { FindHouseService } from '@domain/house/@this/services/find-house.service';
import { GetHousesService } from '@domain/house/@this/services/get-houses.service';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';

@Controller('houses')
export class HousesController {
  constructor(
    private createHouseService: CreateHouseService,
    private findHouseService: FindHouseService,
    private getHousesService: GetHousesService,
  ) {}

  @Get()
  async findAll(@Request() request) {
    const { title, location, type } = request.query;
    const { houses } = await this.getHousesService.execute({
      title,
      locationId: location,
      typeId: type,
    });

    return houses;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const { house } = await this.findHouseService.execute({ id });
    return house;
  }

  @Post()
  @Roles(Role.LANDLORD)
  @UseGuards(AuthGuard, RoleGuard)
  async create(@Body() data: CreateHouseDTO) {
    const { house } = await this.createHouseService.execute(data);
    return house;
  }
}
