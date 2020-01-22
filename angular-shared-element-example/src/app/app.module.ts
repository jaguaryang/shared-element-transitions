import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedElementComponent } from './shared-element/shared-element.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';


const appRoutes: Routes = [
  { path: 'component1', component: Component1Component },
  { path: 'component2', component: Component2Component },
];

@NgModule({
  declarations: [
    AppComponent,
    SharedElementComponent,
    Component1Component,
    Component2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
