import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./components/home-page/home-page.component').then(c => c.HomePageComponent),
  },
  {
    path: '',
    loadComponent: () => import('./components/login/login.component').then(c => c.LoginComponent),
  },
];
