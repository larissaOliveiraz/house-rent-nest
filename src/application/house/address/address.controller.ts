import { Roles } from '@application/@decorators/roles.decorator';
import { AuthGuard } from '@application/@guards/auth.guard';
import { RoleGuard } from '@application/@guards/role.guard';
import { CreateAddressDTO } from '@common/dtos/house.dto';
import { Role } from '@common/enums/role.enum';
import { CreateAddressService } from '@domain/house/address/services/create-address.service';
import { DeleteAddressService } from '@domain/house/address/services/delete-address.service';
import { FindAddressService } from '@domain/house/address/services/find-address.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';

@Controller('address')
export class AddressController {
  constructor(
    private createAddressService: CreateAddressService,
    private findAddressService: FindAddressService,
    private deleteAddressService: DeleteAddressService,
  ) {}

  @Get(':id')
  @UseGuards(AuthGuard)
  async findOne(@Param('id') id: string) {
    return this.findAddressService.execute({ id });
  }

  @Post()
  @Roles(Role.LANDLORD)
  @UseGuards(AuthGuard, RoleGuard)
  async create(@Body() data: CreateAddressDTO) {
    const { address } = await this.createAddressService.execute(data);
    return address;
  }

  @Delete(':id')
  @HttpCode(204)
  @Roles(Role.LANDLORD)
  @UseGuards(AuthGuard, RoleGuard)
  async delete(@Param('id') id: string) {
    await this.deleteAddressService.execute({ id });
  }
}
