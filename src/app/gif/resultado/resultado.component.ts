import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styles: [
  ]
})
export class ResultadoComponent implements OnInit {

  contador:string = String(this.resultados.length);

  constructor(private gifsService:GifsService) { }

  get resultados() {
    return this.gifsService.resultados;
  }

  ngOnInit(): void {
  }

  nextResulatdos() {
    /* this.contador += 1;
    this.gifsService.addGifsHistorial(this.gifsService.searchWorld, this.contador); */
  }

  backResultados() {
   /*  this.contador -= 1;
    this.gifsService.addGifsHistorial(this.gifsService.searchWorld, this.contador); */
  }

}
