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
    });
  }
}
