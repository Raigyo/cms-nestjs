import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/admin/article.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-article-summary',
  templateUrl: './article-summary.component.html',
  styleUrls: ['./article-summary.component.css'],
})
export class ArticleSummaryComponent implements OnInit {
  isWaitingForServerResponse = false;
  error = null;
  @Output() deleteSuccess = new EventEmitter<boolean>();
  @Input()
  article!: Article;
  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {}
  delete(article: Article) {
    this.isWaitingForServerResponse = true;
    this.articleService
      .deleteArticle(article)
      .pipe(catchError(this.handleError))
      .subscribe(
        (data) => {
          this.isWaitingForServerResponse = false;
          this.handleSuccess(data);
        },
        (err) => {
          this.isWaitingForServerResponse = false;
          this.handleError(err);
        }
      );
  }

  handleError(err: null) {
    this.error = err;
    return throwError(this.error);
  }

  handleSuccess(data: Article) {
    console.log('Success', data);
    this.deleteSuccess.emit(true);
  }
}
