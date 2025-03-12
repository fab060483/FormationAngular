import { Routes } from '@angular/router';
import { AccueilComponent } from './features/blog/accueil/accueil.component';
import { ArticleComponent } from './features/blog/article/article.component';
import { ListArticlesComponent } from './features/blog/list-articles/list-articles.component';
import { AddArticleComponent } from './features/blog/add-article/add-article.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './features/blog/login/login.component';
import { RegisterComponent } from './features/blog/register/register.component';

export const routes: Routes = [

    {
        path: '',
        component: AccueilComponent,
        title: 'Blog Angular'
    },
    {
        path: 'articles',
        component: ListArticlesComponent
    },
    {
        path: 'article/new',
        component: AddArticleComponent
    },
    {
        path: 'article/:id',
        component: ArticleComponent
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Connexion'
    },
    {
        path: 'register',
        component: RegisterComponent,
        title: 'Inscription'
    },
    {
        path: '**',
        component: NotFoundComponent,
        title: '404'
    }
];
