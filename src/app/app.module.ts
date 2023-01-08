import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OrdersModule } from './orders/orders.module'; 
import {HttpClientModule} from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteFrameworkModule } from './site-framework/site-framework.module';
import { ProductsService } from './products/products.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrdersModule,
    SiteFrameworkModule,
    HttpClientModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
