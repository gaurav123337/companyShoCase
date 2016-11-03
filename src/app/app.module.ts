import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailInfoComponent } from './product-detail-info/product-detail-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductInfoComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
