import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule]
})
export class PedidoComponent {
  pedidoForm: FormGroup;
  embalagens = [
    { nome: 'Pote de Vidro Pequeno' },
    { nome: 'Frasco Plástico com Pump' },
    { nome: 'Caixa de Papelão Ondulado' },
    { nome: 'Saco Metalizado para Alimentos' },
    { nome: 'Bobina BOPP transparente' }
    // Adicione mais conforme necessário
  ];

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.pedidoForm = this.fb.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      servico: ['', Validators.required],
      embalagem: ['', Validators.required],
      quantidade: [1, [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit() {
    if (this.pedidoForm.valid) {
      this.http.post('http://localhost/backend/pedido.php', this.pedidoForm.value, {
        headers: { 'Content-Type': 'application/json' }
      }).subscribe({
        next: (res: any) => {
          alert('Inserção feita com sucesso!');
          this.router.navigate(['/home']);
        },
        error: () => {
          alert('Erro ao enviar pedido.');
        }
      });
    }
  }
}
