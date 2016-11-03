import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { ProductDetailInfoComponent } from "./product-detail-info/product-detail-info.component";

const PRODUCT_ROUTES: Routes =[
    // {
    //     path:"", component:AppComponent
    // },
    {
        path:"product", component:ProductDetailInfoComponent
    }
];

export const routing = RouterModule.forRoot(PRODUCT_ROUTES);