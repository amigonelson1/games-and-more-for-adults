import { Routes } from '@angular/router';
import { IndexComponenteComponent } from './componentes/index-componente/index-componente.component';
import { HomeComponent } from './componentes/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: IndexComponenteComponent,
        title: 'index'
      },
      {
        path: 'home',
        component: HomeComponent,
        title: 'Home details'
      }
];
