import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors-page',
  templateUrl: './colors-page.component.html',
  styleUrls: ['./colors-page.component.css']
})
export class ColorsPageComponent implements OnInit {
  title:string = 'Color Utilities'
  description:string = `Bootstrap's default utility classes can be found on the official <a href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.`
  constructor() { }

  ngOnInit(): void {
  }

}
