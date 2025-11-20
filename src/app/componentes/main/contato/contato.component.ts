import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // ADICIONE HttpClientModule
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule] // ADICIONE HttpClientModule aqui
})
export class ContatoComponent {
  contactForm: FormGroup;
  isLoading = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isLoading = true;
      this.http.post('http://localhost/BACKEND/contato.php', this.contactForm.value, {
        headers: { 'Content-Type': 'application/json' }
      }).subscribe({
        next: (res: any) => {
          this.isLoading = false;
          alert('Mensagem enviada com sucesso!');
          this.contactForm.reset();
        },
        error: () => {
          this.isLoading = false;
          alert('Erro ao enviar mensagem.');
        }
      });
    }
  }
}
