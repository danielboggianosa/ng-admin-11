import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-requests',
  templateUrl: './card-requests.component.html',
  styleUrls: ['./card-requests.component.css']
})
export class CardRequestsComponent implements OnInit {
  @Input() icon:string = 'fas fa-comments'
  @Input() number:string = '18'
  @Input() border:string = 'border-left'
  @Input() color:string = 'warning'
  @Input() text:string = 'Pending Requests'
  constructor() { }

  ngOnInit(): void {
  }

}
