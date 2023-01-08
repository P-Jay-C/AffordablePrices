import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  productId:any;
  
  constructor(private activatedRoute : ActivatedRoute){

  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productId =  data['id'];
  })
  }
}
