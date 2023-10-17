import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserService } from '@application/users/services/create-user.service';
import { CreateUserDTO } from '@shared/dtos/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly createUserService: CreateUserService) {}

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
