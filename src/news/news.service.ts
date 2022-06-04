import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class NewsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: { name: string; link: string; description: string }) {
    const news = await this.prisma.news.create({
      data: {
        name: data.name,
        link: data.link,
        description: data.description,
      },
    });

    return news;
  }

  async getAll() {
    const news = await this.prisma.news.findMany();
    return news;
  }

  async getById(id: string) {
    const news = await this.prisma.news.findUnique({
      where: {
        id,
      },
    });

    return news;
  }
}
