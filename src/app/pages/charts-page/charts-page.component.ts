import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts-page',
  templateUrl: './charts-page.component.html',
  styleUrls: ['./charts-page.component.css']
})
export class ChartsPageComponent implements OnInit {
  barLabels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio']
  barTitle = 'Mi Primer DataSet'
  barData = [50,60,70,58,96,47,21]
  constructor() { }

  ngOnInit(): void {
  }

}
