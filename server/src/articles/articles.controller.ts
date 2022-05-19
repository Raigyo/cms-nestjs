import { Body, Controller, Post, Get } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesServices: ArticlesService) {}

  @Get()
  async findAll() {
    return this.articlesServices.findAll();
  }
  @Post()
  async createArticle(@Body() createArticleDto: CreateArticleDto) {
    return this.articlesServices.create(createArticleDto);
  }
}
