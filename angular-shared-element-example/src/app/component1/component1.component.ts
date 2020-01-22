import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router"
import { SharedElementComponent } from './../shared-element/shared-element.component';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css'],
})
export class Component1Component implements OnInit {

  constructor(private router: Router) { }

  @ViewChild(SharedElementComponent, { static: false }) private SharedElement: SharedElementComponent;

  ngOnInit() {
  }

  public push(event) {
    this.SharedElement.redirect(() => {
      this.router.navigate(['/component2'])
    });

  }


}
