import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {
  articles$: Observable<any[]> | undefined;
  fullURL = environment.API_URL;
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.articles$ = this.httpClient.get<any[]>(this.fullURL + '/articles');
  }

  reloadArticles(deletionSuccess: any) {
    console.log('deletion successful', deletionSuccess);
    this.articles$ = this.httpClient.get<any[]>(this.fullURL + '/articles');
  }
}
