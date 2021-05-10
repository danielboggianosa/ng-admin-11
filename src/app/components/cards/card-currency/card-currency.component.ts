import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-currency',
  templateUrl: './card-currency.component.html',
  styleUrls: ['./card-currency.component.css']
})
export class CardCurrencyComponent implements OnInit {
  @Input() color:string = 'primary'
  constructor() { }

  ngOnInit(): void {
  }

}
