import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { IntroComponent } from './intro/intro.component';
import { AboutLenaComponent } from './about-lena/about-lena.component';
import { SubNavigationComponent } from './sub-navigation/sub-navigation.component';
import { TeamComponent } from '../team/team.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HeaderComponent, IntroComponent, SubNavigationComponent, AboutLenaComponent, FooterComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
