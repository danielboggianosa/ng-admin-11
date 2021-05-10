import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-brand',
  templateUrl: './button-brand.component.html',
  styleUrls: ['./button-brand.component.css']
})
export class ButtonBrandComponent implements OnInit {
  @Input() content:string = '.btn-google'
  @Input() route:string = ''
  @Input() brand:string = 'btn-google'
  @Input() icon:string = 'fab fa-google fa-fw'
  constructor() { }

  ngOnInit(): void {
  }

}
