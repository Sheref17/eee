import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../../core/services/categories/categories.service';
import { ProudctsService } from '../../core/services/proudcts/proudcts.service';
import { Iproudcts } from '../../shared/Interfaces/iproudcts';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
prodId:any
proudctDetails:Iproudcts={ } as Iproudcts
private readonly proudctsService = inject(ProudctsService)
  private readonly activatedRoute = inject(ActivatedRoute)
ngOnInit(): void {
  this.activatedRoute.paramMap.subscribe({
    next:(res)=>{
    this.prodId  =res.get("id")
  this.proudctsService.getSpecificProudcts(this.prodId).subscribe({
    next:(res)=>{
      this.proudctDetails =  res.data

    },
    error:(err)=>{

    }
  })
    },
    error:(err)=>{

    }
  })
}
}
