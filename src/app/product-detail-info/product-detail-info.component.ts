import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ProductInfo } from '../product-info/product-info.modal';
import { ProductListService } from '../product-info//product-list.service';

@Component({
  selector: 'product-detail-info',
  templateUrl: './product-detail-info.component.html',
  styleUrls: ['./product-detail-info.component.css'],
  providers: [ProductListService]
})
export class ProductDetailInfoComponent {
  productInfoList : ProductInfo[] = [];   

  constructor(private productListService: ProductListService) {  }



  @Input()
  productDetailInfo: ProductInfo;

  

  

}
