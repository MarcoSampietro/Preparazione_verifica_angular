import { Component } from '@angular/core';
import { TerzoComponent } from './terzo/terzo.component';
import { SecondoComponent } from './secondo/secondo.component';

@Component({
  selector: 'app-root',
  imports: [SecondoComponent, TerzoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = "app";
}
