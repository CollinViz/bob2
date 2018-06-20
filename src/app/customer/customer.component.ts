import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {AxxessDslService} from './../axxess-dsl.service'

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  bshowError:boolean = false;
  ErrorMessage:string = "";
  type:string = "Add";
  Customerdetails:any = null;
  constructor(private activatedRoute: ActivatedRoute,private router: Router,private AxxessDslService: AxxessDslService) { 
    
  }

  ngOnInit() {
    //console.log(this.activatedRoute.params.switchMap((x:Params)=>return x;);
    this.activatedRoute.params
    // NOTE: I do not use switchMap here, but subscribe directly
    .subscribe((params: Params) => {
      console.log(params.customerid);
      if(params.customerid){
        if(params.customerid>0){
          //Edit Customer
          this.AxxessDslService.getCustomerByID({id:params.customerid}).subscribe((Customer)=>{
            if(Customer==null){
              console.log("Data Error");
              this.router.navigateByUrl("Customer");
              return;
            }
            this.Customerdetails = Customer; 
            this.type="Edit";
          })
        }else{
          //Create
          this.Customerdetails = {id:-1,name:"",Username:"",password:"",Address:""};
        }
         
      }else{
         //Create Customer
         this.Customerdetails = {id:-1,name:"",Username:"",password:"",Address:""};
      } 
    });
     
  }
  save($event){
    this.AxxessDslService.AddCustomer(this.Customerdetails).subscribe((info)=>{
      //Test if error
      if(info.error){
        this.bshowError = true;
        this.ErrorMessage = info.error;
      }else{
        this.router.navigateByUrl("/Customer");
      }
    })
  }
}
