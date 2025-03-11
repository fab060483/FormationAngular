import { Component } from '@angular/core';
import { ArticleComponent } from '../article/article.component';

@Component({
  selector: 'app-list-articles',
  imports: [],
  templateUrl: './list-articles.component.html',
  styleUrl: './list-articles.component.css'
})
export class ListArticlesComponent {
  articles: ArticleComponent[] = [
    {title: 'Article1', autor: 'Autor1', content: 'Content1 bla bla bla', resume: 'Resumé article 1'},
    {title: 'Article2', autor: 'Autor2', content: 'Content2 bla bla bla', resume: 'Resumé article 2'},
    {title: 'Article3', autor: 'Autor3', content: 'Content3 bla bla bla', resume: 'Resumé article 3'}
  ]
}
