import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCustomerlistComponent } from './app-customerlist.component';

describe('AppCustomerlistComponent', () => {
  let component: AppCustomerlistComponent;
  let fixture: ComponentFixture<AppCustomerlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCustomerlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCustomerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
