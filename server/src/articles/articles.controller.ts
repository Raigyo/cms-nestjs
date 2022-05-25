import {
  Body,
  Controller,
  Post,
  Get,
  UseInterceptors,
  Delete,
  Param,
} from '@nestjs/common';
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

  @Delete(':id')
  async deleteArticle(@Param('id') id: string) {
    return this.articlesServices.delete(id);
  }
}
