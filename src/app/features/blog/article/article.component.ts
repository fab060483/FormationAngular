import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {

  title: string = 'article test';
  autor: string = 'autor test';
  content: string = 'content test';
  resume: string = 'resumé test';
}
