import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { envrionment } from '../../envrionment/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {


  constructor(private httpClient:HttpClient) { }
  checkOutPayment(id:string , data:object):Observable<any>{
    return this.httpClient.post(`${envrionment.baseurl}/api/v1/orders/checkout-session/${id}?url=http://localhost:4200` ,
      {
        "shippingAddress":data
      },
    
    )
  }
}
