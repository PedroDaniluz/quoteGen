import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { LogoComponent } from '../../componentes/logo/logo.component';
import { InputComponent } from '../../componentes/input/input.component';
import { SubmitButtonComponent } from '../../componentes/submit-button/submit-button.component';
import { FormsModule } from '@angular/forms';


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

  handleInputChange(value: string) {
    this.mensagem = value;
  }

  async onSubmit(event: Event) {
    event.preventDefault();

    console.log('Mensagem digitada no formulário:', this.mensagem); // Mantido para ver o valor

    if (!this.mensagem || this.mensagem.trim() === '') {
      alert('Por favor, digite uma mensagem.');
      return;
    }
  }
}