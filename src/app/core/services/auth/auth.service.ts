import { JwtDecodeOptions } from './../../../../../node_modules/jwt-decode/build/esm/index.d';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { envrionment } from '../../envrionment/environment';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly router = inject(Router)
userData:any
  constructor(private httpClient:HttpClient) { }
  sendRegister(data:object):Observable<any>{
    return this.httpClient.post(`${envrionment.baseurl}/api/v1/auth/signup`, data)
  }
  sendLogin(data:object):Observable<any>{
    return this.httpClient.post(`${envrionment.baseurl}/api/v1/auth/signin`, data)
  }
  getUserData():void{
    this.userData =jwtDecode(localStorage.getItem("token")!)
  }
  logoutUser():void{
    localStorage.removeItem("token")
    this.userData = null
    this.router.navigate(['/login'])
  }
}
