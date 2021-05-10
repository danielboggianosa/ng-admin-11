import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() total = 10
  @Input() current = 1
  @Output() onChange = new EventEmitter<any>()
  pages:Array<any>=[]
  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < this.total; i++) {
      this.pages.push({text: i+1})
    }
  }

  handleClick(page){
    if(page == 'previous' && this.current > 1) this.current -= 1
    else if(page == 'next' && this.current < this.total) this.current += 1
    else if(page == 'last') this.current = this.total
    else if(page != 'previous' && page != 'next') this.current = page
    this.onChange.emit(this.current)
  }

}
