import { Routes } from '@angular/router';
import { AccueilComponent } from './features/blog/components/accueil/accueil.component';
import { ArticleComponent } from './features/blog/components/article/article.component';
import { ListArticlesComponent } from './features/blog/components/list-articles/list-articles.component';
import { AddArticleComponent } from './features/blog/components/add-article/add-article.component';
import { NotFoundComponent } from './features/blog/components/not-found/not-found.component';
import { LoginComponent } from './features/blog/components/login/login.component';
import { RegisterComponent } from './features/blog/components/register/register.component';

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
