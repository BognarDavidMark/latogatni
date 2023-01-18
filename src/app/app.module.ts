import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdatComponent } from './adat/adat.component';
import { NevjegyComponent } from './nevjegy/nevjegy.component';

@NgModule({
  declarations: [
    AppComponent,
    AdatComponent,
    NevjegyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
