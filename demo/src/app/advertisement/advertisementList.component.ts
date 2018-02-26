import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from './advertisement.service';
import { Observable } from "rxjs/Rx";

@Component({
    selector: 'advertisement-list',
    templateUrl: './advertisementList.component.html',
    providers: [AdvertisementService]
})
export class AdvertisementListComponent implements OnInit { 
    advertisementList:any;//Observable<any[]>;
    constructor(
        private _AdvertisementService: AdvertisementService){

    }

    ngOnInit(){
        this._AdvertisementService.getAdvertisements()
        .then((advertisementList)=> this.advertisementList = advertisementList.data )
        .catch((err)=> console.log(err));
        console.log(this.advertisementList);
    }
}