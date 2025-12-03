import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CarrouselComponent {
  slides = [
    {
      img: 'assets/img/embalagens-premium.jpeg',
      alt: 'Embalagem premium',
      title: 'Embalagens Premium',
      text: 'Soluções de alta qualidade para seus produtos'
    },
    {
      img: 'assets/img/embalagens-sustentaveis.jpeg',
      alt: 'Embalagens Sustentáveis',
      title: 'Embalagens Sustentáveis',
      text: 'Opções ecológicas para sua empresa'
    },
    {
      img: 'assets/img/embalagens-personalizaveis.jpeg',
      alt: 'Embalagem Personalizada',
      title: 'Embalagens Personalizadas',
      text: 'Design exclusivo para sua marca'
    }
  ];
  activeIndex = 0;

  prevSlide() {
    this.activeIndex = (this.activeIndex === 0) ? this.slides.length - 1 : this.activeIndex - 1;
  }

  nextSlide() {
    this.activeIndex = (this.activeIndex === this.slides.length - 1) ? 0 : this.activeIndex + 1;
  }

  goToSlide(index: number) {
    this.activeIndex = index;
  }
}
