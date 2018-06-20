import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPaymentStartComponent } from './app-payment-start.component';

describe('AppPaymentStartComponent', () => {
  let component: AppPaymentStartComponent;
  let fixture: ComponentFixture<AppPaymentStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPaymentStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPaymentStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
