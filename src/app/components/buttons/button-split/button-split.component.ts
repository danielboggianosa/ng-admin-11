import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-split',
  templateUrl: './button-split.component.html',
  styleUrls: ['./button-split.component.css']
})
export class ButtonSplitComponent implements OnInit {
  @Input() route:string = ''
  @Input() color:string = 'btn-primary'
  @Input() size:string = ''
  @Input() icon:string = 'fas fa-flag'
  @Input() iconContent:string = ''
  @Input() text:string = 'Split Button Primary'
  constructor() { }

  ngOnInit(): void {
  }

}
