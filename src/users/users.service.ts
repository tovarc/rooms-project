import { Injectable } from '@nestjs/common';
import { IUser } from 'src/interfaces/user.interface';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findByEmail(email: string): Promise<IUser> {
    return this.prisma.users.findUnique({
      where: {
        email,
      },
      include: {
        role: true,
      },
    });
  }

  async create(data: {
    name: string;
    email: string;
    password: string;
    admin?: boolean;
  }) {
    const newUser = await this.prisma.users.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
        role: {
          connect: {
            role: data.admin ? 'admin' : 'student',
          },
        },
      },
    });

    return newUser;
  }
}
