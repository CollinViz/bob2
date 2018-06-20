import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json' 
  })
}; 
@Injectable()
export class AxxessDslService {
  baseURL = 'http://0.0.0.1:81/AxxessDSL/ajax.php';
  UserLoginObj = new Subject<any>();
  UserLoginObjAnnounced$ = this.UserLoginObj.asObservable();
  //UserLoginObj:any = null; 
  constructor(private http: HttpClient) { 
    this.http.get<any>("/AxxessDSLProd/assets/settings.php",httpOptions).subscribe((settings)=>{
      this.baseURL= settings.BaseURL;
    })

  }
  // Service message commands
  setLoginUser(UserLogin: any) {
    this.UserLoginObj.next(UserLogin);
  }
 
  //setLoginUser(UserLogin:any){
  //  this.UserLoginObj = UserLogin;
  //}
  checkLogin(UserName:string,Password:string): Observable<any> {
    let login={__class:'LoginGUI',__call:'checkLogin',UserName:UserName,Password:Password};
    return this.http.post<any>(this.baseURL ,login,httpOptions);
  } 
  getCustomerList(){
    let customerList = {__class:"CustomerGUI",__call:'listCustomers'};
    return this.http.post<any>(this.baseURL ,customerList,httpOptions);
  }
  getCustomerByID(CustomerObj:any){
    CustomerObj.__class="CustomerGUI";
    CustomerObj.__call="listCustomersByID"; 
    return this.http.post<any>(this.baseURL ,CustomerObj,httpOptions);
  }
  UpdateCustomer(CustomerObj:any){
    CustomerObj.__class="CustomerGUI";
    CustomerObj.__call="updateCustomer"; 
    return this.http.post<any>(this.baseURL ,CustomerObj,httpOptions);
  }
  DeleteCustomer(CustomerObj:any){
    CustomerObj.__class="CustomerGUI";
    CustomerObj.__call="DeleteCustomer"; 
    return this.http.post<any>(this.baseURL ,CustomerObj,httpOptions);
  }
  AddCustomer(CustomerObj:any){
    CustomerObj.__class="CustomerGUI";
    CustomerObj.__call="CreateCustomer"; 
    return this.http.post<any>(this.baseURL ,CustomerObj,httpOptions);
  }
  CreateInvoice(Invoice:any){
    Invoice.__class="InvoiceGUI";
    Invoice.__call="createInvoice";
    return this.http.post<any>(this.baseURL ,Invoice,httpOptions);
  }
  CreatePayment(payment:any){
    payment.__class="PaymentGUI";
    payment.__call="createPayment";
    return this.http.post<any>(this.baseURL ,payment,httpOptions);
  }
}
