import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { ArticleNewComponent } from './article-new/article-new.component';

@NgModule({
  declarations: [HomeComponent, ArticleComponent, ArticleNewComponent],
  imports: [CommonModule, AdminRoutingModule, FormsModule, ReactiveFormsModule],
})
export class AdminModule {}
