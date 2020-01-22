import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from "@angular/router"
import { SharedElementComponent } from './../shared-element/shared-element.component';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  constructor(private router: Router) { }

  @ViewChild(SharedElementComponent, { static: false }) private SharedElement: SharedElementComponent;

  ngOnInit() {
  }

  public push(event) {
    this.SharedElement.redirect(() => {
      this.router.navigate(['/component1'])
    });
  }

}
