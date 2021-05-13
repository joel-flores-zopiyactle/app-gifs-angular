import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Data, Gifs } from '../interfaces/gif.interface';


@Injectable({
  providedIn: 'root'
})
export class GifsService {

  searchWorld:string = "";
  private _api_key:string = "xaW9qwQocKAb8nBE72Q7dsQLYZACEKJS"; // Api_key para conectarse al resful de GYPHY Developers
  private _servidor_url:string = "https://api.giphy.com/v1/gifs";
  private _historial:string[] = [];

  resultados:Data[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor(private http:HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('histori-gifs')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('result-gifs')!) || [];
   }



  addGifsHistorial(arg:string, count:string) {

    arg = arg.toLowerCase();

    if(!this._historial.includes(arg)) {
      this._historial.unshift(arg);
      this._historial = this._historial.splice(0,10);
      localStorage.setItem('histori-gifs', JSON.stringify(this._historial));
      console.log(this._historial);
      this.searchWorld = arg;
    }

    const params = new HttpParams()
    .set('api_key', this._api_key)
    .set('limit', '20')
    .set("offset", count)
    .set('q', arg);

    this.http.get<Gifs>(`${this._servidor_url}/search`, {
      params
    })
        .subscribe( res => {
          console.log(res.data);
          this.resultados = res.data;
          localStorage.setItem('result-gifs', JSON.stringify(res.data));
      });

  }
}
