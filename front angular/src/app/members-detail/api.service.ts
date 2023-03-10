import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:8000/';
  httpHeaders = new HttpHeaders({ 'Content-Type': 'applications/json' });

  //  interação com a api
  constructor(private http: HttpClient) { }

  getMember(id: any): Observable<any> {
    return this.http.get(this.baseUrl + 'menbers/' + id + '/', {
      headers: this.httpHeaders,
    });
  }
}
