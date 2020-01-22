import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedElementComponent } from './shared-element.component';

describe('SharedElementComponent', () => {
  let component: SharedElementComponent;
  let fixture: ComponentFixture<SharedElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
