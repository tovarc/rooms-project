import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class RoomsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(room: { name: string; description: string }) {
    const { name, description } = room;

    const newRoom = await this.prisma.rooms.create({
      data: {
        name,
        description,
      },
    });

    return newRoom;
  }

  async getAll() {
    const rooms = await this.prisma.rooms.findMany();

    if (!rooms.length) {
      throw new HttpException('The rooms has not been found', 404);
    }

    return rooms;
  }

  async bookRoom(room: { id: string; booked_from: Date; booked_to: Date }) {
    console.log(room.id);

    const bookedRoom = await this.prisma.rooms.update({
      where: {
        id: room.id,
      },
      data: {
        booked: true,
        booked_from: room.booked_from,
        booked_to: room.booked_to,
      },
    });

    if (!bookedRoom) {
      throw new HttpException('The room has not been updated', 404);
    }

    throw new HttpException(
      { message: 'The room has been updated successfully', bookedRoom },
      201,
    );
  }
}
