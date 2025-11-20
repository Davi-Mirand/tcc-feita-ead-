import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from "./componentes/cabecalho/cabecalho.component";
import { RodapeComponent } from "./componentes/rodape/rodape.component";
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CabecalhoComponent, RodapeComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'projeto_t';

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const theme = localStorage.getItem('theme');
      if (theme === 'dark') {
        this.renderer.addClass(document.body, 'dark-theme');
      } else {
        this.renderer.removeClass(document.body, 'dark-theme');
      }
    }
  }
}
