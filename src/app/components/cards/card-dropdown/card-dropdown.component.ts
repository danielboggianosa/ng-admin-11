import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-dropdown',
  templateUrl: './card-dropdown.component.html',
  styleUrls: ['./card-dropdown.component.css']
})
export class CardDropdownComponent implements OnInit {
  @Input() title=''
  @Input() description=''
  constructor() { }

  ngOnInit(): void {
  }

}
