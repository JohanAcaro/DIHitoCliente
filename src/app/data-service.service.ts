import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  // Constructor para inicializar HttpClient
  constructor(private http: HttpClient) { }

  // Métodos para obtener datos del servidor

  // Método para obtener dato raiz del servidor
  getRaiz(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/personajes');
  }
  
  // Método para obtener datos del servidor
  getData(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/personajes/listar');
  }

  // Método para enviar datos al servidor
  postData(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/personajes/insertar', data);
  }
  
  // Método para actualizar datos del servidor
  putData(data: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/personajes/editar', data);
  }

  // Método para eliminar datos del servidor
  deleteData(id: number): Observable<any> {
    return this.http.delete<any>('http://localhost:3000/api/personajes/eliminar/' + id);
  }
}
