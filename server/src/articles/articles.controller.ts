import { Body, Controller, Post, Get, UseInterceptors } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { CheckauthorInterceptor } from '../interceptors/checkauthor.interceptor';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesServices: ArticlesService) {}

  @Get()
  async findAll() {
    return this.articlesServices.findAll();
  }
  @Post()
  @UseInterceptors(CheckauthorInterceptor)
  async createArticle(@Body() createArticleDto: CreateArticleDto) {
    return this.articlesServices.create(createArticleDto);
  }
}
