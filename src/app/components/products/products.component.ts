import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../core/products.service';
import { Iproduct } from '../../core/iproduct';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  constructor (private _ProductsService:ProductsService){

  }
  products:Iproduct[] =[];

  ngOnInit(): void {
    this._ProductsService.getProduct().subscribe({
      next: (res)=>{
       this.products = res;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

}
