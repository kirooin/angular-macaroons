import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, NgModel} from "@angular/forms";
import {ProductsService} from "./services/products.service";
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { ProductComponent } from './components/product/product.component';
import { CoolBackgroundBtnDirective } from './directives/cool-background-btn.directive';

@NgModule({
  declarations: [
    AppComponent,
    AdvantagesComponent,
    ProductComponent,
    CoolBackgroundBtnDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
