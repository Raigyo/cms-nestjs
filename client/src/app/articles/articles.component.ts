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
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.articles$ = this.httpClient.get<any[]>(
      environment.API_URL + '/articles'
    );
  }
}
