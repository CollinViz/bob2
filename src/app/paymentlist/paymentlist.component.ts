import { Component, OnInit,ViewChild  } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {AxxessDslService} from './../axxess-dsl.service'
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-paymentlist',
  templateUrl: './paymentlist.component.html',
  styleUrls: ['./paymentlist.component.css']
})
export class PaymentlistComponent implements OnInit {
  bSelectCustomer = true;
  bShowError = false;
  ErrorMessage = "";//,
  payment:any={CustomerID:-1,Description:"",Amount:0,PaymentNumber:"",UserID:-1};
  CustomerSeleced:any=null;

  constructor(private activatedRoute: ActivatedRoute, private router: Router,private AxxessDslService: AxxessDslService) { }
  

  ngOnInit() {
    this.activatedRoute.params
    // NOTE: I do not use switchMap here, but subscribe directly
    .subscribe((params: Params) => {
      if(params.customerid){
        this.AxxessDslService.getCustomerByID({id:params.customerid}).subscribe((Customer)=>{
          if(Customer==null){
            console.log("Data Error");
            this.router.navigateByUrl("Customer");
            return;
          }
          this.CustomerSeleced = Customer;
          this.payment.CustomerID = this.CustomerSeleced.id;
          this.bSelectCustomer = false;  
        })
      }else{
        this.bSelectCustomer = true;
      }
    });
  }

  customerSelected(SelecedCustomer:any){
    this.CustomerSeleced = SelecedCustomer;
    this.payment.CustomerID = this.CustomerSeleced.id;
    this.bSelectCustomer = false;
  }
  changeCustomer(){
    this.bSelectCustomer = true;
  }
  save(){
    this.AxxessDslService.CreatePayment(this.payment).subscribe((paymentInfo)=>{
      if(paymentInfo.error){
        this.ErrorMessage = paymentInfo.error;
        this.bShowError= true;
      }else{
        //Show Saved and invoice number
        this.payment.PaymentNumber=paymentInfo.Payment;
        this.showChildModal();
      }

    })

  }
  @ViewChild('childModal') childModal: ModalDirective;
 
  showChildModal(): void {
    this.childModal.show();
  }
 
  hideChildModal(): void {
    this.bSelectCustomer = true;
    this.payment={CustomerID:-1,Description:"",Amount:0,PaymentNumber:""};

    this.childModal.hide();
  }
}
