import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-user',
  templateUrl: './button-user.component.html',
  styleUrls: ['./button-user.component.css']
})
export class ButtonUserComponent implements OnInit {
  @Input() color:string = 'btn-primary'
  @Input() route:string = ''
  @Input() text:string = 'Login'

  constructor() { }

  ngOnInit(): void {
  }

}
