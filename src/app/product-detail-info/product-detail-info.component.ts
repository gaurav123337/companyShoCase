import { Component, OnInit, Input } from '@angular/core';

import { ProductInfo } from '../product-info/product-info.modal';

@Component({
  selector: 'product-detail-info',
  templateUrl: './product-detail-info.component.html',
  styleUrls: ['./product-detail-info.component.css']
})
export class ProductDetailInfoComponent {

  constructor() {  }

  @Input()
  productDetailInfo: ProductInfo;

}
