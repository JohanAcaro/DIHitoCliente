import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor(private http: HttpClient) { }

  getRaiz(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/personajes');
  }

  getData(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/personajes/listar');
  }
  
  postData(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/personajes/insertar', data);
  }

  putData(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/personajes/editar', data);
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete<any>('http://localhost:3000/api/personajes/eliminar/' + id);
  }
}
