import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-basic',
  templateUrl: './card-basic.component.html',
  styleUrls: ['./card-basic.component.css']
})
export class CardBasicComponent implements OnInit {
  @Input() title:string='Basic Card Example'
  @Input() description:string='The styling for this basic card example is created by using default Bootstrap utility classes. By using utility classes, the style of the card component can be easily modified with no need for any custom CSS!'
  
  constructor() { }

  ngOnInit(): void {
  }

}
