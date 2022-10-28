import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card-homer',
  templateUrl: './small-card-homer.component.html',
  styleUrls: ['./small-card-homer.component.css']
})
export class SmallCardHomerComponent implements OnInit {
  @Input()
  photoSmall:string=""
  @Input()
  titleSmall:string=""
  @Input()
  id:string="0"
  constructor() { }

  ngOnInit(): void {
  }

}
