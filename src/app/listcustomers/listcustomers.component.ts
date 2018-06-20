import { Component, OnInit,EventEmitter, Input, Output  } from '@angular/core';
import {Router} from '@angular/router';
import {AxxessDslService} from './../axxess-dsl.service'
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-listcustomers',
  templateUrl: './listcustomers.component.html',
  styleUrls: ['./listcustomers.component.css']
})
export class ListcustomersComponent implements OnInit {
  CustomerList:any = null;
  selectedCustomer:any ={Name:"Select Customer",id:-1};
  @Output() onChangeCustomer = new EventEmitter<any>();

  constructor( private router: Router,private AxxessDslService: AxxessDslService) { }
  getAllCustomer(){
    this.AxxessDslService.getCustomerList().subscribe((customers:any)=>{
      console.log(customers);
      this.CustomerList = customers;
    });
  }
  ngOnInit() {
    this.getAllCustomer();
  }
  selectCustomer($event,SelecedCustomer,Index){
    this.selectedCustomer= SelecedCustomer;
    this.onChangeCustomer.emit(SelecedCustomer);
  }
}
