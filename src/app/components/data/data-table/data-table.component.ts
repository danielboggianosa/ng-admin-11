import { Component, Input, OnInit } from '@angular/core';
import data from '../mock-data'

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @Input() headers:Array<Object> = [
    {id: 1, key: "name", title: "Name", visible: true, sortable: true, order:''},
    {id: 2, key: "company", title: "Company", visible: true, sortable: true, order:''},
    {id: 3, key: "number", title: "Number", visible: true, sortable: true, order:''},
    {id: 4, key: "city", title: "City", visible: true, sortable: true, order:''},
    {id: 5, key: "start", title: "Start", visible: true, sortable: true, order:''},
    {id: 6, key: "salary", title: "Salary", visible: true, sortable: true, order:''},
  ]
  @Input() tableData:Array<Object> = []
  search:string = ''
  actions:Array<Object> = [
    {text:'10'},
    {text:'20'},
    {text:'50'},
    {text:'100'},
  ]
  rows:number = 0
  total:number = 0
  constructor() { }

  ngOnInit(): void {
    this.loadData()
  }

  setOrder(key){
    let index = this.headers.findIndex(h => h['key'] == key )
    let order = this.headers[index]['order']
    if(order === 'asc'){
      this.headers.map(h => h['order'] = '')
      this.headers[index]['order'] = 'desc'
    }
    else {
      this.headers.map(h => h['order'] = '')
      this.headers[index]['order'] = 'asc'
    }
    data.sort((a,b)=>{
      let sort:number = order === 'asc' ? -1 : 1
      if(a[key] > b[key]) return sort
      if(a[key] < b[key]) return sort * (-1)
      return 0
    })
    this.tableData = data
  }

  loadData(){
    this.tableData = data
    this.rows = this.tableData.length
    this.total = data.length
  }

  filterTable(){
    this.tableData.filter(d => {
      if(d['name'].toLowerCase().includes(this.search)) return true
      else return false
    })
    // this.tableData = data
  }

  limitData(n){
    this.tableData = data.slice(0, n)
    this.rows = n
    this.total = data.length
  }

  changePage(p){
    
  }

}
