import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {

  constructor(private productsService: ProductsService) {

  }

  addNewProduct(productForm: NgForm) {
    let newProduct = {
      id:8,
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

    this.productsService.createProduct(newProduct).subscribe();
  }


}