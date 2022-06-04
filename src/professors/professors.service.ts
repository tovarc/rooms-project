import { Injectable } from '@nestjs/common';
import { Rooms } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ProfessorsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: {
    name: string;
    designation: string;
    phone: string;
    email: string;
    roomId: string;
  }) {
    const { roomId, ...newProfessor } = data;
    const professor = await this.prisma.professors.create({
      data: {
        ...newProfessor,
        room: {
          connect: {
            id: data.roomId,
          },
        },
      },
    });

    return professor;
  }

  async getAll() {
    const professors = await this.prisma.professors.findMany();

    return professors;
  }
}
