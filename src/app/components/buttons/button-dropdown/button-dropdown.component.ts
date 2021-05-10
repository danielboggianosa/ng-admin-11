import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-dropdown',
  templateUrl: './button-dropdown.component.html',
  styleUrls: ['./button-dropdown.component.css']
})
export class ButtonDropdownComponent implements OnInit {
  @Input() color:string = 'primary'
  @Input() text:string = 'Dropdown'
  @Input() arrow:boolean = true
  @Input() actions:Array<Object> = [
    {link: '', text: 'Action', click: ()=>{}},
    {link: '', text: 'Another Action', click: ()=>{}},
    {link: '', text: 'Something else here', click: ()=>{}}
  ]
  @Output() actionClick = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }

  handleActionClick(e){
    this.actionClick.emit(e)
  }

}
