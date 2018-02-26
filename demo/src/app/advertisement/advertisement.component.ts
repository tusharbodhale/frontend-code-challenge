import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'advertisement-card',
  templateUrl:'./advertisement.component.html'
})
export class AdvertisementComponent implements OnInit { 
  @Input() advertisement:any; 
  constructor(){}
  ngOnInit(){
  }
}


