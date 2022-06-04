import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { Public, Roles } from 'src/decorators';
import { Role } from 'src/decorators/role.enum';
import { RoomsService } from './rooms.service';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Roles(Role.Admin)
  @Post('/')
  async create(@Body() room: { name: string; description: string }) {
    return this.roomsService.create(room);
  }

  @Public()
  @Get('/')
  async getAll() {
    return this.roomsService.getAll();
  }

  @Roles(Role.Admin)
  @Put('/book')
  async bookRoom(@Body() room: { id: string; booked_from: Date; booked_to: Date }) {
    return this.roomsService.bookRoom(room);
  }
}
