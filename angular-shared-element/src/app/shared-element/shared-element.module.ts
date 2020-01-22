import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedElementComponent } from './shared-element/shared-element.component';




@NgModule({
  declarations: [SharedElementComponent],
  imports: [
    CommonModule
  ],
  exports: [SharedElementComponent]
})
export class SharedElementModule { }
