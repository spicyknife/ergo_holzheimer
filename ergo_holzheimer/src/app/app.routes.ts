import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';


export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home', component: HomepageComponent },
];

export const routingComponents = [
  HomepageComponent,
  ];
