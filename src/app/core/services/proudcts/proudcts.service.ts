import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { envrionment } from '../../envrionment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProudctsService {

  constructor(private httpClient:HttpClient) { }
  getAllProudcts():Observable<any>{
   return this.httpClient.get(`${envrionment.baseurl}/api/v1/products`)
  }
  getSpecificProudcts(id:string):Observable<any>{
    return this.httpClient.get(`${envrionment.baseurl}/api/v1/products/${id}`)
   }
 }

