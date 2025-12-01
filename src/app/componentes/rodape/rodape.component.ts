import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule]
})
export class RodapeComponent {
  newsletterEmail = '';

  constructor(private http: HttpClient) { }

  inscreverNewsletter() {
    if (this.newsletterEmail) {
      this.http.post('http://localhost/backend/newsletter.php', { email: this.newsletterEmail }, {
        headers: { 'Content-Type': 'application/json' }
      }).subscribe({
        next: (res: any) => {
          if (res?.success) {
            alert('E-mail inscrito com sucesso!');
            this.newsletterEmail = '';
          } else {
            alert('Erro: ' + (res?.error || 'Erro ao inscrever.'));
          }
        },
        error: () => {
          alert('Erro ao inscrever.');
        }
      });
    }
  }
}
