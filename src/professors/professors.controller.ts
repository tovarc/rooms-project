import { Body, Controller, Get, Post } from '@nestjs/common';
import { Public, Roles } from 'src/decorators';
import { Role } from 'src/decorators/role.enum';
import { ProfessorsService } from './professors.service';

@Controller('professors')
export class ProfessorsController {
  constructor(private readonly professorsService: ProfessorsService) {}

  @Roles(Role.Admin)
  @Post('')
  async create(
    @Body()
    data: {
      name: string;
      designation: string;
      phone: string;
      email: string;
      roomId: string;
    },
  ) {
    return this.professorsService.create(data);
  }

  @Public()
  @Get('')
  async getAll() {
    return this.professorsService.getAll();
  }
}
