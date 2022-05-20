import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private httpClient: HttpClient) {}

  createArticle(article: any) {
    return this.httpClient.post<any>(
      environment.API_URL + '/articles',
      article
    );
  }
}
