import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-border-left',
  templateUrl: './card-border-left.component.html',
  styleUrls: ['./card-border-left.component.css']
})
export class CardBorderLeftComponent implements OnInit {
  @Input() color:string = 'primary'
  @Input() border:string = 'border-left'
  @Input() text:string = 'Earnings (Monthly)'
  @Input() currency:string = '$40,000'
  @Input() icon:string = 'fas fa-calendar'
  constructor() { }

  ngOnInit(): void {
  }

}
