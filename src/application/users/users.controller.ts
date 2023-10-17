import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserService } from '@application/users/services/create-user.service';
import { CreateUserDTO } from '@shared/dtos/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly createUserService: CreateUserService) {}

  @Post()
  async create(@Body() user: CreateUserDTO) {
    return this.createUserService.execute(user);
  }
}
