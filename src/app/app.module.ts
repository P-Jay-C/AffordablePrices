import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OrdersModule } from './orders/orders.module'; 
import {HttpClientModule} from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsService } from './products/products.service';
import { SiteFrameworkModule } from './site-framework/site-framework.module';
import { FormsModule,NgForm } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [ProductsService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        OrdersModule,
        SiteFrameworkModule,
        HttpClientModule,
        FormsModule
    ]
})
export class AppModule { }
