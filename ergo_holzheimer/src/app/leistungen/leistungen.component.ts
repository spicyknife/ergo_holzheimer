import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-leistungen',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './leistungen.component.html',
  styleUrl: './leistungen.component.scss'
})
export class LeistungenComponent {

}
