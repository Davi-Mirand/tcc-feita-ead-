import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  
  ngAfterViewInit() {
    this.initCarousel();
  }

  initCarousel() {
    // Configuração do carrossel
    const carousel = document.querySelector('.carousel') as HTMLElement;
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    
    let currentSlide = 0;
    const slideCount = slides.length;

    // Função para atualizar o carrossel
    const updateCarousel = () => {
      carousel.style.transform = `translateX(-${currentSlide * (100 / slideCount)}%)`;
      
      // Atualizar indicadores
      indicators.forEach((indicator, index) => {
        if (index === currentSlide) {
          indicator.classList.add('active');
        } else {
          indicator.classList.remove('active');
        }
      });
    };

    // Event listeners para os botões
    if (nextButton) {
      nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slideCount;
        updateCarousel();
      });
    }

    if (prevButton) {
      prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        updateCarousel();
      });
    }

    // Event listeners para os indicadores
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        currentSlide = index;
        updateCarousel();
      });
    });

    // Auto-avanço do carrossel
    setInterval(() => {
      currentSlide = (currentSlide + 1) % slideCount;
      updateCarousel();
    }, 5000);
  }
}