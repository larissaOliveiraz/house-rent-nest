import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CreateUserService } from '@domain/users/services/create-user.service';
import { CreateUserDTO } from '@common/dtos/user.dto';
import { GetUserProfileService } from '../../domain/users/services/get-user-profile.service';
import { AuthGuard } from '@application/@guards/auth.guard';

@Controller('users')
export class UsersController {
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly getUserProfileService: GetUserProfileService,
  ) {}

  @Get()
  @UseGuards(AuthGuard)
  async findOne(@Request() request) {
    const { profile } = await this.getUserProfileService.execute({
      id: request.user.id,
    });
    const { password, ...userView } = profile;
    return userView;
  }

  @Post()
  async create(@Body() userDTO: CreateUserDTO) {
    const { user } = await this.createUserService.execute(userDTO);

    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }
}
