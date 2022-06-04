import { Body, Controller, Post } from '@nestjs/common';
import { Public } from 'src/decorators';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Public()
  @Post('/')
  async create(
    @Body()
    data: {
      name: string;
      email: string;
      password: string;
      admin?: boolean;
    },
  ) {
    return this.userService.create(data);
  }
}
