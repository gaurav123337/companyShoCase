import { Component, OnInit } from '@angular/core';
import { ProductInfo } from './product-info.modal';

import { ProductListService } from './product-list.service';


@Component({
  selector: 'product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css'],
  providers: [ProductListService]
})
export class ProductInfoComponent {
  productInfo : ProductInfo;
  appInfo:  ProductInfo[];
  constructor(private productListService: ProductListService) { }
  
   getAppList() {
     let data;
    this.productListService.getAppList().subscribe(
      data => {
        this.appInfo = data;
        console.log(this.appInfo,"this.appInfo");
      }
    );
  }

  ngOnInit() {
    this.getAppList();
  }
}
