import { Component, OnInit } from '@angular/core';
import {AxxessDslService} from './../axxess-dsl.service'
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  bshowCustomer:boolean= false;
  bshowInvoice:boolean= false;
  bshowPayment:boolean= false;
  TextInfo:string="";
  subscription: Subscription;

  isCollapsed = true;
  constructor(private AxxessDslService: AxxessDslService) {
    this.subscription =this.AxxessDslService.UserLoginObjAnnounced$.subscribe((User)=>{
      //console.log("Got new data from service");
      //console.log(User.id);
      //this.TextInfo="ddddddddddd";
      this.bshowCustomer = true;
      this.bshowInvoice = true;
      this.bshowPayment = true; 
      
    });
   }

  ngOnInit() {
  }

}
