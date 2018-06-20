import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AxxessDslService} from './../axxess-dsl.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  inputPassword:string="Test";
  inputUserName:string="Test";
  bshowError:boolean = false;
  ErrorMessage:string = "";
  constructor(private router: Router,private AxxessDslService: AxxessDslService) { }

  ngOnInit() {
  }
  login($event){
    this.bshowError = false;
    this.ErrorMessage = "";
    this.AxxessDslService.checkLogin(this.inputUserName,this.inputPassword).subscribe((LogIn:any)=>{
      //console.log(LogIn);
      if(LogIn.error){
        this.bshowError = true;
        this.ErrorMessage = LogIn.error;
      }else{
        //do OK login
        this.AxxessDslService.setLoginUser(LogIn);       
        this.router.navigateByUrl('/Customer');
      }
    });
  }
}
