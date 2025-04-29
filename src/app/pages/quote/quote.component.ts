import { Component, OnInit } from '@angular/core';
import { LogoComponent } from '../../componentes/logo/logo.component';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.css'
})
export class QuoteComponent {
  citacao: string = '';
  filosofo: string = '';
  movimento: string = '';
  hex1: string = '';
  hex2: string = '';

  ngOnInit(): void {
    this.citacao = localStorage.getItem('citacao') || '';
    this.filosofo = localStorage.getItem('filosofo') || '';
    this.movimento = localStorage.getItem('movimento') || '';
    this.hex1 = localStorage.getItem('hex1') || '';
    this.hex2 = localStorage.getItem('hex2') || '';
  }
}
