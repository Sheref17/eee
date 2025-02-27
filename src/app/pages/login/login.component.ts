'@angular/core';import { Component, inject } from '@angular/core';
import{AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { AuthService } from '../../core/services/auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private readonly authService = inject(AuthService)
  private readonly router = inject(Router)
  isSuccess:string = ""

  isLoading:boolean = false;
  msgError:string = ""
login: FormGroup = new FormGroup({
 
  email:new FormControl(null , [ Validators.required ,Validators.email]),
  password: new FormControl(null, [
    Validators.required,
    Validators.pattern(/^[A-Z]\w{7,}$/)
  ]),
  
  

} );
submitForm():void{
if(this.login.valid){
  this.isLoading = true;
  this.authService.sendLogin(this.login.value).subscribe({
    next:(res)=>{
      console.log(res)
      if(res.message === 'success'){
      setTimeout(() => {
        localStorage.setItem("token",res.token)
        this.authService.getUserData()
        this.router.navigate(['/home'])
      }, 500);
       this.isSuccess = res.message 

      }
      this.isLoading = false;
    },
    error:(err:HttpErrorResponse)=>{
      console.log(err)
      this.msgError = err.error.message
      this.isLoading = false;
    }
  })
}
}

}
