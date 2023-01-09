import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  productId: any;
  productDetails: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService) {

  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.productId = data['id'] -1 ;

      this.productsService.viewProduct(this.productId).subscribe(productData => {
        this.productDetails = productData;
      })
    });
  }

  updateProduct(productForm:NgForm){

    console.log(productForm.value)
    
    const updateProduct = {
      id:this.productId,
      categoryId: productForm.value.categoryId,
      productName: productForm.value.productName,
      productImg: "",
      description: productForm.value.description,
      rating: productForm.value.rating,
      price: productForm.value.price,
      isAvailable: productForm.value.isAvailable,
      color: productForm.value.color,
      reviews: productForm.value.reviews
    }

    this.productsService.updateProduct(updateProduct,this.productId+1).subscribe(data=>{
      
    })
  }
}
