import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { envrionment } from '../../envrionment/environment';
import { count } from 'console';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 

  constructor(private  httpClient:HttpClient) { }

  cartNumber:BehaviorSubject<number> =  new BehaviorSubject(0)
  addProudctToCart(id:string):Observable<any>{
    return this.httpClient.post(`${envrionment.baseurl}/api/v1/cart` ,

      {
        "productId":id
      },
     
    )
  }
  getLoggedUserCart():Observable<any>{
    return this.httpClient.get(`${envrionment.baseurl}/api/v1/cart` ,
     
        )
  }
  removeSpecicficCartitem(id:string):Observable<any>{
    return this.httpClient.delete(`${envrionment.baseurl}/api/v1/cart/${id}`,
   
    )
  }
  updateProudctQuantity(id:string , newCount:number):Observable<any>{
    return this.httpClient.put(`${envrionment.baseurl}/api/v1/cart/${id}`,{
      "count":newCount
    },
   
  )
  }
  clearCart():Observable<any>{
    return this.httpClient.delete(`${envrionment.baseurl}/api/v1/cart`
      
    )
  }
}
