import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'})
export class GifsService {

  public gifList: Gif[] = [];
  private _tagsHistory: string[] = [];
  private apiKey:       string = 'FYvMBskfNJIY6P8jJ07Z8CpmsNp5SlEe';
  private serviceUrl:   string = 'https://api.giphy.com/v1/gifs';
  constructor(private http: HttpClient) {
    this.loadLocalStorage();
    console.log('Gifs service ready');
  }

  get tagsHistory() {
    //para evitar romper referencias
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    // se pasa a minúscula
    tag = tag.toLowerCase();
    // si el tag ya está incluido en búsquedas anteriores se saca del listado
    if(this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag )
    }
    // se añade el tag en la primera posición del listado
    this._tagsHistory.unshift(tag);
    // nos quedamos con las 10 primeras posiciones
    this._tagsHistory = this._tagsHistory.splice(0,10);
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage(): void {
    if(!localStorage.getItem('history')) return;

    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
    this.searchTag(this._tagsHistory[0]);
  }

  public searchTag(tag: string): void {
    if( tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag);
    this.http.get<SearchResponse>(`${ this.serviceUrl }/search`, { params })
      .subscribe( (resp) => {
        this.gifList = resp.data;
      })


    //this._tagsHistory.unshift( tag );
  }

}
