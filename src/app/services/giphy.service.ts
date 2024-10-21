import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Gif } from '../models/gif.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GiphyService {
  private apiUrl = 'https://api.giphy.com/v1/gifs/search';

  constructor(private http: HttpClient) {}

  // Metodo para buscar GIFs
  searchGifs(query: string): Observable<Gif[]> {
    const params = new HttpParams()
      .set('api_key', environment.apiKey)
      .set('q', query)
      .set('limit', '25'); 

    return this.http.get<any>(this.apiUrl, { params }).pipe(
      map(response => {

        // Mapeamos la respuesta para extraer solo los campos necesarios
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
