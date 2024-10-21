// src/app/services/mock-giphy.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Gif } from '../models/gif.model';

@Injectable({
  providedIn: 'root',
})
export class MockGiphyService {

  //Rta del MOCK
  private mockUrl = 'assets/mocks/dragonball-mock.json'; 

  constructor(private http: HttpClient) {}


  // MEtodo para simular una búsqueda
  searchGifs(query: string): Observable<Gif[]> {

    return this.http.get<any>(this.mockUrl).pipe(
      map(response => {
        // console.log(response);
        
        // Mapeamos la respuesta para ajustarla a nuestra interface GIF
        return response.data.map((item: any) => ({
          id: item.id ?? 'N/A',            
          title: item.title ?? 'Untitled', 
          url: item.url ?? '',           
          embedUrl: item.embed_url ?? '', 
        }));
      })
    );
  }
}
