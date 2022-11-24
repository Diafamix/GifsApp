import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interface/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'zMksmpEipOabPGugGj9kMuJszwL1mrbL';
  private _historial: string[] = [];

  public resultados: Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor ( private http: HttpClient ) {}

  bucarGifs( query: string ) {

    query = query.trim().toLocaleLowerCase();

    if( !this._historial.includes( query )) {
      this._historial.unshift( query );
      this._historial = this._historial.splice(0,10);
    }

    this.http.get<SearchGifsResponse>(`http://api.giphy.com/v1/gifs/search?api_key=zMksmpEipOabPGugGj9kMuJszwL1mrbL&q=${ query }&limit=10`)
    .subscribe( (resp ) => {
      console.log( resp.data );
      this.resultados = resp.data;
      resp.data[0].images.downsized_medium.url;
    });
  }
}
