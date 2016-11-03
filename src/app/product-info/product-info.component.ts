import { Component, OnInit, Input } from '@angular/core';
import { ProductInfo } from './product-info.modal';

import { ProductListService } from './product-list.service';


@Component({
  selector: 'product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css'],
  providers: [ProductListService]
})
export class ProductInfoComponent {
  @Input()
  productInfo : ProductInfo;
  appInfo:  ProductInfo[];
  selectedProduct: ProductInfo;

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

  // gotoDetail(productInfo: ProductInfo) {
  //   console.log(productInfo,"productInfo");
  //   this.productInfo = productInfo;
  // }

  gotoDetail(productInfo: ProductInfo) {    
    this.selectedProduct = productInfo;
    console.log( this.selectedProduct," this.selectedProduct");
  }

  ngOnInit() {
    this.getAppList();
  }
}
