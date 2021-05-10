import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() total = 10
  @Input() current = 1
  @Output() onChange = new EventEmitter<any>()
  pages:Array<any>=[]
  constructor() { }

  ngOnInit(): void {}
  
  ngOnChanges(): void {
    this.pages = []
    this.current = 1
    for (let i = 0; i < this.total; i++) {
      this.pages.push({text: i+1})
    }
  }

  handleClick(page){
    if(page == 'previous' && this.current > 1) this.current -= 1
    else if(page == 'next' && this.current < this.total) this.current += 1
    else if(page == 'last' && this.current != this.total) this.current = this.total
    else if(['previous', 'next', 'last'].indexOf(page) == -1 && page != this.current) this.current = page
    else return
    this.onChange.emit(this.current)
  }

}
