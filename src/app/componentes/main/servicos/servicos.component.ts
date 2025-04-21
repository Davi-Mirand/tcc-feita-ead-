import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

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
  selector: 'app-servicos',
  imports: [CommonModule,HttpClientModule],
  standalone: true,
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.css'
})
export class ServicosComponent implements OnInit {
  embalagens: { id: number; nome: string; quantidade: number; urlimg: string }[] = [];
  private apiUrl = 'http://localhost/backend/embalagens.php';
  private apiUrlDetalhe = 'http://localhost/backend/detalhe-embalagem.php';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    console.log('ServicosComponent foi inicializado!'); // Adicione esta linha
    this.carregarEmbalagens();
  }

  carregarEmbalagens(): void {
    this.http.get<{ id: number; nome: string; quantidade: number; urlimg: string }[]>(this.apiUrl)
      .subscribe(
        (data) => {
          this.embalagens = data;
        },
        (error) => {
          console.error('Erro ao carregar as embalagens:', error);
        }
      );
  }

  navegarParaDetalhe(id: number): void {
    this.router.navigate(['/servicos-Descricao', id]);
  }
}