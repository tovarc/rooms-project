import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Public, Roles } from 'src/decorators';
import { Role } from 'src/decorators/role.enum';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Roles(Role.Admin)
  @Post('')
  async create(
    @Body() data: { name: string; link: string; description: string },
  ) {
    return this.newsService.create(data);
  }

  @Public()
  @Get('')
  async getAll() {
    return this.newsService.getAll();
  }

  @Public()
  @Get(':id')
  async getById(@Param() params: { id: string }) {
    return this.newsService.getById(params.id);
  }
}
