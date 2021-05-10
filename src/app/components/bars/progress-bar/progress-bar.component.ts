import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() title:string = 'Server Migration'
  @Input() color:string = 'primary'
  @Input() progress:number = 20
  @Input() min:number = 0
  @Input() max:number = 100
  constructor() { }

  ngOnInit(): void {
  }

}
