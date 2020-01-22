import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedElementModule } from './shared-element/shared-element.module'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedElementModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
