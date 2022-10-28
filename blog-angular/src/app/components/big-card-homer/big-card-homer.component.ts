import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card-homer',
  templateUrl: './big-card-homer.component.html',
  styleUrls: ['./big-card-homer.component.css']
})
export class BigCardHomerComponent implements OnInit {
  @Input()
  photoCover:string=""
  @Input()
  title:string=""
  @Input()
  description:string="Os apoiadores de Aegon Targaryen entram em conflito com os adeptos de sua meia-irmã, Rhaenyra, pelo trono de Viserys I, seu falecido pai, iniciando uma guerra civil cerca de 200 anos antes dos eventos retratados em Game of Thrones"
  @Input()
  id:string="0"
  constructor() { }

  ngOnInit(): void {
  }

}
