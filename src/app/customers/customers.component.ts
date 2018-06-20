import { Component, OnInit,ViewChild  } from '@angular/core';
import {Router} from '@angular/router';
import {AxxessDslService} from './../axxess-dsl.service'
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  LoginData:any = null;
  CustomerList:any = null; 
  DeleteCustomer:any=null;
  constructor( private router: Router,private AxxessDslService: AxxessDslService) { }
  getAllCustomer(){
    this.AxxessDslService.getCustomerList().subscribe((customers:any)=>{
      console.log(customers);
      this.CustomerList = customers;
    });
  }
  ngOnInit() {
    console.log(this.AxxessDslService.UserLoginObj);
    //this.LoginData=this.AxxessDslService.UserLoginObj;
    //load customer list
    this.getAllCustomer();
  }
  delete($event,CustomerID,RowID){
    this.DeleteCustomer={id:CustomerID,RowID:RowID,Name:this.CustomerList[RowID].Name};
    this.childModal.show();
  }
  DeleteYes(){
    this.AxxessDslService.DeleteCustomer(this.DeleteCustomer).subscribe((ok)=>{
      if(ok.error){
        //Show error code
      }else{
        this.getAllCustomer();
      }
      this.childModal.hide();
    });
  }
  @ViewChild('childModal') childModal: ModalDirective;
 
  showChildModal(): void {
    this.childModal.show();
  }
 
  hideChildModal(): void {
    this.childModal.hide();
  }

}
