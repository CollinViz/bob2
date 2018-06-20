import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Router, ActivatedRoute, Params } from '@angular/router';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerComponent } from './customer/customer.component';
import { InvoicelistComponent } from './invoicelist/invoicelist.component';
import { InvoicecreateComponent } from './invoicecreate/invoicecreate.component';
import { PaymentlistComponent } from './paymentlist/paymentlist.component';
import { PaymentcreateComponent } from './paymentcreate/paymentcreate.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UsercreateComponent } from './usercreate/usercreate.component';
import { FooterComponent } from './footer/footer.component';
import { AxxessDslService } from './axxess-dsl.service';
import { AppCustomerlistComponent } from './app-customerlist.component';
import { AppRoutingModule } from './/app-routing.module';
import { AppInvoicestartComponent } from './app-invoicestart.component';
import { ListcustomersComponent } from './listcustomers/listcustomers.component';
import { AppPaymentStartComponent } from './app-payment-start.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    CustomersComponent,
    CustomerComponent,
    InvoicelistComponent,
    InvoicecreateComponent,
    PaymentlistComponent,
    PaymentcreateComponent,
    UserlistComponent,
    UsercreateComponent,
    FooterComponent,
    AppCustomerlistComponent,
    AppInvoicestartComponent,
    ListcustomersComponent,
    AppPaymentStartComponent
  ],
  imports: [
    BrowserModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    NgxDatatableModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    RouterModule.forRoot([{
      path: '',
      component: LoginComponent
    },
    {
      path: 'Customer',
      component: AppCustomerlistComponent
    },
    {
      path: 'Customeredit/:customerid',
      component: CustomerComponent
    }, {
      path: 'invoice/:customerid',
      component: AppInvoicestartComponent
    },
    {
      path: 'invoice',
      component: AppInvoicestartComponent
    },{
      path: 'payment/:customerid',
      component: AppPaymentStartComponent
    },
    {
      path: 'payment',
      component: AppPaymentStartComponent
    }

    ]),
    AppRoutingModule,
  ],
  providers: [AxxessDslService],
  bootstrap: [AppComponent]
})
export class AppModule { }
