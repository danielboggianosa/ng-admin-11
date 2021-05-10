import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  imageField = [
    {id: 1, tag: 'input', type:'image', name:'profile-pic', placeholder:'Upload Image', class:'d-flex justify-content-center'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  uploadImage(e){
    console.log(e)
  }

}
