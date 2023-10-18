import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserService } from '@domain/user/services/create-user.service';
import { CreateUserDTO } from '@common/dtos/user.dto';
import { GetUserProfileService } from '../../domain/user/services/get-user-profile.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly getUserProfileService: GetUserProfileService,
  ) {}

  @Get('/:id')
  async findOne(@Param('id') id: string) {
    const { profile } = await this.getUserProfileService.execute({ id });
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
