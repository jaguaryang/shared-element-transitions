import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public push(event) {
    this.router.navigate(['/component1'])
  }

}
