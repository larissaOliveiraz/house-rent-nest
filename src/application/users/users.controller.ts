import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserService } from '@domain/services/user/create-user.service';
import { CreateUserDTO } from '@shared/dtos/user.dto';
import { GetUserProfileService } from '../../domain/services/user/get-user-profile.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly getUserProfileService: GetUserProfileService,
  ) {}

  @Get('/:id')
  async findOne(@Param('id') id: string) {
    const { user } = await this.getUserProfileService.execute({ id });
    const { password, ...userView } = user;
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
