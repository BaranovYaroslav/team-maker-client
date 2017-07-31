import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { InfoService }    from './info.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule // <-- import the FormsModule before binding with [(ngModel)]
  ],
  declarations: [
    AppComponent
  ],
  providers: [ InfoService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
