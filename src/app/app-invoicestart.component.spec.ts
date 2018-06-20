import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInvoicestartComponent } from './app-invoicestart.component';

describe('AppInvoicestartComponent', () => {
  let component: AppInvoicestartComponent;
  let fixture: ComponentFixture<AppInvoicestartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppInvoicestartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppInvoicestartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
