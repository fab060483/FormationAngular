import { Component, inject, signal } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import {RouterModule} from '@angular/router';
import { ArticleServiceService } from '../../services/article-service.service';
import { __values } from 'tslib';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-articles',
  imports: [RouterModule],
  templateUrl: './list-articles.component.html',
  styleUrl: './list-articles.component.css'
})
export class ListArticlesComponent {
 /* articles: ArticleComponent[] = [
    {id: 1, title: 'Article1', autor: 'Autor1', content: 'Content1 bla bla bla', resume: 'Resumé article 1'},
    {id: 2, title: 'Article2', autor: 'Autor2', content: 'Content2 bla bla bla', resume: 'Resumé article 2'},
    {id: 3, title: 'Article3', autor: 'Autor3', content: 'Content3 bla bla bla', resume: 'Resumé article 3'}
  ]*/
  
  articles = signal<ArticleComponent[]>([]);
  private articleService = inject(ArticleServiceService);

  ngOnInit() {
    this.articles.update(values => this.articleService.getArticles());
  }
}
