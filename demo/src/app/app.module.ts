import { NgModule, LOCALE_ID }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule } from '@angular/http';
import 'rxjs/Rx';

import { AppComponent }  from './app.component';
import { AdvertisementListComponent } from './advertisement/advertisementList.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, AdvertisementListComponent, AdvertisementComponent ],
  bootstrap:    [ AppComponent ],
  providers: [{
      provide: LOCALE_ID,
      useValue: 'de-DE' // 'de-DE' for Germany, 'fr-FR' for France ...
    },
  ]
})
export class AppModule { }
