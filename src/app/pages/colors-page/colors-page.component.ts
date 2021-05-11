import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors-page',
  templateUrl: './colors-page.component.html',
  styleUrls: ['./colors-page.component.css']
})
export class ColorsPageComponent implements OnInit {
  title:string = 'Color Utilities'
  description:string = ``
  constructor() { }

  ngOnInit(): void {
  }

}
