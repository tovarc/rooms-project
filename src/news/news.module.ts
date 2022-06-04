import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';

@Module({
  controllers: [NewsController],
  providers: [NewsService, PrismaService]
})
export class NewsModule {}
