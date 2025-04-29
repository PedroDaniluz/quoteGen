import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { LogoComponent } from '../../componentes/logo/logo.component';
import { InputComponent } from '../../componentes/input/input.component';
import { SubmitButtonComponent } from '../../componentes/submit-button/submit-button.component';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../service/api.service';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    RouterOutlet,
    LogoComponent,
    InputComponent,
    SubmitButtonComponent,
    FormsModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {
  mensagem: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  handleInputChange(value: string) {
    this.mensagem = value;
  }

  async onSubmit(event: Event) {
    event.preventDefault();

    console.log('Mensagem digitada no formulário:', this.mensagem);

    if (!this.mensagem || this.mensagem.trim() === '') {
      alert('Por favor, digite uma mensagem.');
      return;
    }

    try {
      const response = await this.apiService.enviarMensagem(this.mensagem).toPromise();

      localStorage.setItem('citacao', response.citação);
      localStorage.setItem('filosofo', response.filósofo);
      localStorage.setItem('movimento', response.movimento);
      localStorage.setItem('hex1', response.hex1);
      localStorage.setItem('hex2', response.hex2);

      console.log('Resposta da API:', response);

      this.router.navigate(['/quote']);
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
    }
  }
}