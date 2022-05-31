import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private baseURL = environment.API_URL;
  private httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private httpClient: HttpClient) {}

  createArticle(article: Article) {
    const fullURL = `${this.baseURL}/articles`;
    return this.httpClient.post<Article>(fullURL, article, this.httpHeaders);
  }
  deleteArticle(article: Article) {
    const fullURL = `${this.baseURL}/articles/${article._id}`;
    return this.httpClient.delete<Article>(fullURL, this.httpHeaders);
  }

  updateArticle(articleId: string, article: Article) {
    const fullUrl = `${this.baseURL}/articles/${articleId}`;
    return this.httpClient.put<Article>(fullUrl, article, this.httpHeaders);
  }
}
