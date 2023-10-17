import { Body, Controller } from '@nestjs/common';
import { CreateUserService } from '@application/users/services/create-user.service';
import { SaveUserDTO } from './dtos/save-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly createUserService: CreateUserService) {}

  async create(@Body() user: SaveUserDTO) {
    return this.createUserService.execute(user);
  }
}
