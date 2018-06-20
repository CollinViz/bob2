import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AxxessDslService} from './axxess-dsl.service'

@Component({
  selector: 'app-app-customerlist',
  templateUrl: './app-customerlist.component.html',
  styleUrls: ['./app-customerlist.component.css']
})
export class AppCustomerlistComponent implements OnInit {

  constructor(private router: Router,private AxxessDslService: AxxessDslService) { }

  ngOnInit() {
  }
  addcustomer($event){
    //Create new customer
    this.router.navigateByUrl('/Customeredit/-1');
  }
  
}
