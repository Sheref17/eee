import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


export const headersInterceptor: HttpInterceptorFn = (req, next) => {
  const pLATFORM_ID = inject(PLATFORM_ID)
  if(isPlatformBrowser(pLATFORM_ID)){
    if(localStorage.getItem("token")){
      req = req.clone( {
        setHeaders:{
          token:localStorage.getItem("token")!
        }
      })
    }
  

  }

  


  return next(req);

};
