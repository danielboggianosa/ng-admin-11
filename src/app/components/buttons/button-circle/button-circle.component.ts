import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-circle',
  templateUrl: './button-circle.component.html',
  styleUrls: ['./button-circle.component.css']
})
export class ButtonCircleComponent implements OnInit {
  @Input() color:string='btn-primary'
  @Input() size:string=''
  @Input() icon:string='fab fa-facebook-f'
  @Input() route:string=''
  constructor() { }

  ngOnInit(): void {
  }

}
