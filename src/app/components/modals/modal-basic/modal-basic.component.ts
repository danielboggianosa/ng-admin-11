import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-basic',
  templateUrl: './modal-basic.component.html',
  styleUrls: ['./modal-basic.component.css']
})
export class ModalBasicComponent implements OnInit {
  @Input() name:string = "modalBasic"
  @Input() header:string
  @Input() content:string
  @Input() dismissButtonText:string = "Cancelar"
  @Input() mainButtonText:string = "Action"
  @Output() mainButtonClickEvent = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }

  mainButtonClick($event){
    this.mainButtonClickEvent.emit($event)
  }

}
