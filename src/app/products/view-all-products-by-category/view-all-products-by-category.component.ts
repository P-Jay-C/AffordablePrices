import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-all-products-by-category',
  templateUrl: './view-all-products-by-category.component.html',
  styleUrls: ['./view-all-products-by-category.component.css']
})

export class ViewAllProductsByCategoryComponent implements OnInit {
  
  searchCategory:any;
  productList:any;

  constructor(
    private activatedRoute:ActivatedRoute,
    private productsService: ProductsService
    ) {
  }
  ngOnInit(): void { 

    this.activatedRoute.params.subscribe(data=>{

      console.log(data)
      this.searchCategory = data['id'];
    });

    this.productsService.searchCategoryProducts(this.searchCategory).subscribe(categoryData=>{
      this.productList = categoryData
    })
  }
}
