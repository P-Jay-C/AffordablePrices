import { Component } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})

export class ViewAllProductsComponent {

  productList : any;
  constructor(private productService: ProductsService){

  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(data=>{
      this.productList =data;
    })
  }

}
