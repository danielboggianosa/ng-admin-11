import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-dropdown',
  templateUrl: './navbar-dropdown.component.html',
  styleUrls: ['./navbar-dropdown.component.css']
})
export class NavbarDropdownComponent implements OnInit {
  @Input() animation:string = 'fade'
  constructor() { }

  ngOnInit(): void {
  }

}
