import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  
  productId:any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService){

  }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productId = data['id']
    })

    this.productsService.deleteProduct(this.productId).subscribe(data=>{
      alert("Product deleted sucessfully");
    })
  }

}
