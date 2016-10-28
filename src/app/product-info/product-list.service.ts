import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';  
import 'rxjs/Rx';
import { ProductInfo } from './product-info.modal';

@Injectable()
export class ProductListService {
  private appList:any []= [];

  constructor(private http: Http) { }
   getAppList(){    
    return this.http.get('app/dataJson/appInfo.json').map((res:Response) => res.json());
  }

}
