import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private httpClient: HttpClient) {}

  createArticle(article: Article) {
    return this.httpClient.post<Article>(
      environment.API_URL + '/articles',
      article
    );
  }
}
