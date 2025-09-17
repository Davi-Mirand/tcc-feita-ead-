import { Component } from '@angular/core';
import { CarrouselComponent } from '../../carrousel/carrousel.component';

@Component({
  selector: 'app-home',
  standalone: true, // 👈 adiciona isso
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CarrouselComponent]
})
export class HomeComponent {}
