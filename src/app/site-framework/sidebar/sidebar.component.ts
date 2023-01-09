import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/products.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  categoryList:any;

constructor(private productsService: ProductsService){
}
  ngOnInit(): void {
    this.productsService.getCategories().subscribe(data=>{
      this.categoryList = data;
    })
  }
}
