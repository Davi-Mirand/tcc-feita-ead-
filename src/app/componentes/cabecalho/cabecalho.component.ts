import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2, } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css'],
  imports: [RouterLink]
})
export class CabecalhoComponent implements OnInit {
  isDark = false;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      const theme = localStorage.getItem('theme') || 'light';
      this.isDark = theme === 'dark';
      this.applyBodyClass();
    }
  }

  toggleTheme(): void {
    this.isDark = !this.isDark;
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
    }
    this.applyBodyClass();
  }

  private applyBodyClass(): void {
    if (this.isDark) {
      this.renderer.addClass(document.body, 'dark-theme');
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
    }
  }
}
