import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-progress',
  templateUrl: './card-progress.component.html',
  styleUrls: ['./card-progress.component.css']
})
export class CardProgressComponent implements OnInit {
  @Input() color:string = 'info'
  @Input() width:number = 50
  @Input() min:number = 0
  @Input() max:number = 100
  @Input() border:string = 'border-left'
  percentage:string = (this.width/this.max*100) + '%'
  @Input() text:string = 'Tasks'
  @Input() icon:string = 'fas fa-clipboard-list'
  constructor() { }

  ngOnInit(): void {
  }

}
