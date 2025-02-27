import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {

  counter:number = 0
  userName:string = ""
  changeCounter():void{
    this.counter =this.counter +1
  }
  changeName():void{
    this.userName = "sherif"
  }
}
