import {
  Body,
  Controller,
  Post,
  Get,
  UseInterceptors,
  Delete,
  Param,
  Put,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { CheckauthorInterceptor } from '../interceptors/checkauthor.interceptor';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  async findAll() {
    return this.articlesService.findAll();
  }

  @Post()
  @UseInterceptors(CheckauthorInterceptor)
  async createArticle(@Body() createArticleDto: CreateArticleDto) {
    return this.articlesService.create(createArticleDto);
  }

  @Delete(':id')
  async deleteArticle(@Param('id') id: string) {
    return this.articlesService.delete(id);
  }

  @Put(':id')
  async updateArticle(
    @Param('id') id: string,
    @Body() article: UpdateArticleDto,
  ) {
    console.log('id', id);
    console.log('article', article);
    return this.articlesService.update(id, article);
  }
}
