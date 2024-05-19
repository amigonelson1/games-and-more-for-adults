import { Routes } from '@angular/router';
import { IndexComponenteComponent } from './componentes/index-componente/index-componente.component';
import { HomeComponent } from './componentes/home/home.component';
import { JuguetesComponent } from './componentes/juguetes/juguetes.component';
import { JuguetesEllasComponent } from './componentes/juguetes-ellas/juguetes-ellas.component';
import { JuguetesEllosComponent } from './componentes/juguetes-ellos/juguetes-ellos.component';
import { LenceriaComponent } from './componentes/lenceria/lenceria.component';
import { LenceriaEllasComponent } from './componentes/lenceria-ellas/lenceria-ellas.component';
import { LenceriaEllosComponent } from './componentes/lenceria-ellos/lenceria-ellos.component'; 
import { EstimulantesComponent } from './componentes/estimulantes/estimulantes.component';
import { EstimulantesEllasComponent } from './componentes/estimulantes-ellas/estimulantes-ellas.component';
import { EstimulantesEllosComponent } from './componentes/estimulantes-ellos/estimulantes-ellos.component';
import { SomeDefaultComponetComponent } from './componentes/some-default-componet/some-default-componet.component';

export const routes: Routes = [
  { path: '', component: IndexComponenteComponent, title: 'index' },
  {
    path: 'home', component: HomeComponent, title: 'Home details', children: [
      { path: '', component: SomeDefaultComponetComponent, title: 'default-component' },
      { path: 'estimulantes', component: EstimulantesComponent, title: 'stimulants' },
      { path: 'estimulantes-ellas', component: EstimulantesEllasComponent, title: 'stimulants-women' },
      { path: 'estimulantes-ellos', component: EstimulantesEllosComponent, title: 'stimulants-men' },
      { path: 'juguetes', component: JuguetesComponent, title: 'toys' },
      { path: 'juguetes-ellas', component: JuguetesEllasComponent, title: 'toys-women' },
      { path: 'juguetes-ellos', component: JuguetesEllosComponent, title: 'toys-men' },
      { path: 'lenceria', component: LenceriaComponent, title: 'lingerie' },
      { path: 'lenceria-ellas', component: LenceriaEllasComponent, title: 'lingerie-women' },
      { path: 'lenceria-ellos', component: LenceriaEllosComponent, title: 'lingerie-men' },
    ]
  }
];
