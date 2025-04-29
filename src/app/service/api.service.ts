import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:5000/api/quote'; // URL da sua API Flask

  constructor(private http: HttpClient) { }

  // Função para enviar a mensagem para a API Flask
  enviarMensagem(mensagem: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { mensagem });
  }
}