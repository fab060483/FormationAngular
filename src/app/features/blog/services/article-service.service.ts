import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ArticleComponent } from '../components/article/article.component';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

  constructor() { }

  private http = inject(HttpClient);
  
  getArticles(): ArticleComponent[] {
   // return this.http.get('https://jsonplaceholder.typicode.com/posts');
   return [
    {id: 1, title: 'Article1', autor: 'Autor1', content: 'Content1 bla bla bla', resume: 'Resumé article 1'},
    {id: 2, title: 'Article2', autor: 'Autor2', content: 'Content2 bla bla bla', resume: 'Resumé article 2'},
    {id: 3, title: 'Article3', autor: 'Autor3', content: 'Content3 bla bla bla', resume: 'Resumé article 3'}
  ]
  }

  getArticleById(id: number): ArticleComponent {
    //return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id);
    return {id: 1, title: 'Article1', autor: 'Autor1', content: 'Content1 bla bla bla', resume: 'Resumé article 1'}
  }
}
