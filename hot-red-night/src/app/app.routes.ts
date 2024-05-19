import { Routes } from '@angular/router';
import { IndexComponenteComponent } from './componentes/index-componente/index-componente.component';
import { HomeComponent } from './componentes/home/home.component';
import { JuguetesComponent } from './componentes/juguetes/juguetes.component';
import { JuguetesEllasComponent } from './componentes/juguetes-ellas/juguetes-ellas.component';
import { JuguetesEllosComponent } from './componentes/juguetes-ellos/juguetes-ellos.component';
import { LenceriaComponent } from './componentes/lenceria/lenceria.component';
import { LenceriaEllasComponent } from './componentes/lenceria-ellas/lenceria-ellas.component';
import { LenceriaEllosComponent } from './componentes/lenceria-ellos/lenceria-ellos.component';
import { LubricantesComponent } from './componentes/lubricantes/lubricantes.component';
import { LubricantesEllasComponent } from './componentes/lubricantes-ellas/lubricantes-ellas.component';
import { LubricantesEllosComponent } from './componentes/lubricantes-ellos/lubricantes-ellos.component';
import { EstimulantesComponent } from './componentes/estimulantes/estimulantes.component';
import { EstimulantesEllasComponent } from './componentes/estimulantes-ellas/estimulantes-ellas.component';
import { EstimulantesEllosComponent } from './componentes/estimulantes-ellos/estimulantes-ellos.component';

export const routes: Routes = [
  { path: '', component: IndexComponenteComponent, title: 'index' },
  { path: 'home',component: HomeComponent,title: 'Home details'},
  { path: 'home/juguetes',component: JuguetesComponent,title: 'toys'},
  { path: 'home/juguetes-ellas',component: JuguetesEllasComponent,title: 'toys-women'},
  { path: 'home/juguetes-ellos',component: JuguetesEllosComponent,title: 'toys-men'},
  { path: 'home/lenceria',component: LenceriaComponent,title: 'lingerie'},
  { path: 'home/lenceria-ellas',component: LenceriaEllasComponent,title: 'lingerie-women'},
  { path: 'home/lenceria-ellos',component: LenceriaEllosComponent,title: 'lingerie-men'},
  { path: 'home/lubricantes',component: LubricantesComponent,title: 'lubricants'},
  { path: 'home/lubricantes-ellas',component: LubricantesEllasComponent,title: 'lubricants-women'},
  { path: 'home/lubricantes-ellos',component: LubricantesEllosComponent,title: 'lubricants-men'},
  { path: 'home/estimulantes',component: EstimulantesComponent,title: 'stimulants'},
  { path: 'home/estimulantes-ellas',component: EstimulantesEllasComponent,title: 'stimulants-women'},
  { path: 'home/estimulantes-ellos',component: EstimulantesEllosComponent,title: 'stimulants-men'}
];
