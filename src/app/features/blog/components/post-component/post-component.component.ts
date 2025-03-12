import { Component } from '@angular/core';

@Component({
  selector: 'app-post-component',
  imports: [],
  templateUrl: './post-component.component.html',
  styleUrl: './post-component.component.css'
})
export class PostComponentComponent {
  userId: number = 1;
  id: number = 1;
  title: string = 'article test';
  body: string = 'content test';
}
