import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/datafake'

@Component({
  selector: 'app-conteud',
  templateUrl: './conteud.component.html',
  styleUrls: ['./conteud.component.css']
})
export class ConteudComponent implements OnInit {
  photo:string=""
  title:string=""
  description:string=""
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ) {
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
       this.id = value.get("id")
    )
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]
    this.title = result.title
    this.photo = result.photo
    this.description = result.description
  }
}
