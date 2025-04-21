import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Importe o CommonModule

interface EmbalagemDetalhe {
  id: number;
  nome: string;
  quantidade: number;
  urlimg: string;
  descricao: string;
  tipo_embalagem: string;
  material: string;
}

@Component({
  selector: 'app-servicos-descricao', // Ajuste o selector se necessário
  imports: [CommonModule,RouterModule,HttpClientModule], // Adicione CommonModule aqui
  templateUrl: './servicos-descricao.component.html',
  styleUrl: './servicos-descricao.component.css'
})
export class ServicosDescricaoComponent implements OnInit {
  embalagemDetalhe: EmbalagemDetalhe | null = null;
  embalagemId: number = 0;
  private apiUrlDetalhe = 'http://localhost/backend/detalhe-embalagem.php';

  constructor(private http: HttpClient, private route: ActivatedRoute) { } // Importe ActivatedRoute se ainda não estiver

  ngOnInit(): void {
    this.route.params.subscribe(params => { // Assuma que você está recebendo o ID pela rota
      this.embalagemId = +params['id'];
      this.carregarDetalheEmbalagem(this.embalagemId);
    });
  }

  carregarDetalheEmbalagem(id: number): void {
    const params = new HttpParams().set('id', id.toString());
    this.http.get<EmbalagemDetalhe>(this.apiUrlDetalhe, { params })
      .subscribe(
        (data) => {
          this.embalagemDetalhe = data;
        },
        (error) => {
          console.error(`Erro ao carregar os detalhes da embalagem com ID ${id}:`, error);
          this.embalagemDetalhe = null;
        }
      );
  }
}
