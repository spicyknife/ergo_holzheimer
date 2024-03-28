import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { TeamComponent } from './team/team.component';
import { LeistungenComponent } from './leistungen/leistungen.component';
import { PraxisComponent } from './praxis/praxis.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';


export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'team', component: TeamComponent },
  { path: 'leistungen', component: LeistungenComponent },
  { path: 'praxis', component: PraxisComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'datenschutz', component: DatenschutzComponent },
  { path: 'kontakt', component: KontaktComponent },
];

export const routingComponents = [
  HomepageComponent,
  TeamComponent,
  ];
