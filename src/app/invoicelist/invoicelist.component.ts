import { Component, OnInit,ViewChild  } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';
import {AxxessDslService} from './../axxess-dsl.service'
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-invoicelist',
  templateUrl: './invoicelist.component.html',
  styleUrls: ['./invoicelist.component.css']
})
export class InvoicelistComponent implements OnInit {
  bSelectCustomer = true;
  bShowError = false;
  ErrorMessage = "";
  
  CustomerSeleced:any=null;
  InvoiceHeader={InvoiceNumber:"",CustomerID:-1,Description:"",Status:"",UserID:0,
                invoicelines:[{Description:"",Amount:0}]};
  
  constructor( private activatedRoute: ActivatedRoute,private router: Router,private AxxessDslService: AxxessDslService) { }
  
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
          this.InvoiceHeader.CustomerID = this.CustomerSeleced.id;
          this.bSelectCustomer = false;  
        })
      }else{
        this.bSelectCustomer = true;
      }
    });
  }
  customerSelected(SelecedCustomer:any){
    this.CustomerSeleced = SelecedCustomer;
    this.InvoiceHeader.CustomerID = this.CustomerSeleced.id;
    this.bSelectCustomer = false;
  }
  addLine(){
    this.InvoiceHeader.invoicelines.push({Description:"",Amount:0})

  }
  delete($event,i){
    this.InvoiceHeader.invoicelines.splice(i, 1);
  } 
  changeCustomer(){
    this.bSelectCustomer = true;
  }
  save(){
    this.AxxessDslService.CreateInvoice(this.InvoiceHeader).subscribe((InvoiceInfo)=>{
      if(InvoiceInfo.error){
        this.ErrorMessage = InvoiceInfo.error;
        this.bShowError= true;
      }else{
        //Show Saved and invoice number
        this.InvoiceHeader.InvoiceNumber=InvoiceInfo.InvoiceNumber;
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
    this.InvoiceHeader={InvoiceNumber:"",CustomerID:-1,Description:"",Status:"",UserID:0,
                        invoicelines:[{Description:"",Amount:0}]};

    this.childModal.hide();
  }
}
