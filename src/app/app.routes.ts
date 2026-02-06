import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { PostDetail } from './pages/post-detail/post-detail';
import { About } from './pages/about/about';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'post/:slug', component: PostDetail },
    { path: 'about', component: About },
    { path: '**', redirectTo: '' }
];
