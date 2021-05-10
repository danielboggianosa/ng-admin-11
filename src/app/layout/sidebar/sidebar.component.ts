import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @ViewChild('accordionSidebar', {static:true}) accordionSidebar;

  constructor() { }

  ngOnInit(): void {
  }
  
  toggle(){
    this.accordionSidebar.nativeElement.classList.toggle('toggled');
  }
}
