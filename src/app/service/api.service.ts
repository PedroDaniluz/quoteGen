import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://34.230.203.66/api/quote';

  constructor(private http: HttpClient) { }

  enviarMensagem(mensagem: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { mensagem });
  }
}