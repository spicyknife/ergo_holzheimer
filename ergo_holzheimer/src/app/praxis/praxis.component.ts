import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-praxis',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './praxis.component.html',
  styleUrl: './praxis.component.scss'
})
export class PraxisComponent {

}
