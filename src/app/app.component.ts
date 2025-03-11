import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { SearchBarComponent } from './features/blog/search-bar/search-bar.component';

import { LoginComponent } from './features/blog/login/login.component';
import { RegisterComponent  } from './features/blog/register/register.component';

import { ArticleComponent } from './features/blog/article/article.component';
import { ListArticlesComponent } from './features/blog/list-articles/list-articles.component';
import { AccueilComponent } from './features/blog/accueil/accueil.component';
import { AddArticleComponent } from './features/blog/add-article/add-article.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SearchBarComponent, LoginComponent, RegisterComponent, ArticleComponent, ListArticlesComponent, AccueilComponent, AddArticleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ma_premiere_app';
}
