import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from './products';
import { Observable } from 'rxjs';
import { Category } from '../site-framework/category';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  createProduct(productBody: any):Observable<Products> {
    const productUrl = "http://localhost:3000/products";
      return this.httpClient.post<Products>(productUrl, productBody);
  }

  viewProduct(productId:any) :Observable<Products>  {
    const productUrl = "http://localhost:3000/products?productId=" + productId;
    return this.httpClient.get<Products>(productUrl);
  }

  updateProduct(productBody:any,productId:any): Observable<Products>  {
    const productUrl = "http://localhost:3000/products/" + productId;
    return this.httpClient.put<Products>(productUrl,productBody);
  }
  deleteProduct(productId:any):Observable<Products>  {
    const productUrl = "http://localhost:3000/products/" + productId;
    return this.httpClient.delete<Products>(productUrl);
  }

  searchCategoryProducts(categoryId:any):Observable<Products>  {
    const productUrl = "http://localhost:3000/products?categoryId="+categoryId;
    return this.httpClient.get<Products>(productUrl);
  }
  searchDateProducts(dateParam:any):Observable<Products>  {
    const productUrl = "http://localhost:3000/products/" + dateParam;
    return this.httpClient.get<Products>(productUrl);
  }

  getCategories():Observable<Category>{
    const categoriesUrl  = "http://localhost:3000/categories";
    return this.httpClient.get<Category>(categoriesUrl);
  }

  getAllProducts():Observable<Products>{
    const productsUrl  = "http://localhost:3000/products";
    return this.httpClient.get<Products>(productsUrl);
  }

}
