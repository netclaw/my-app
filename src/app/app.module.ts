import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { HeaderComponent } from './header/header.component';
import { PanierComponent } from './panier/panier.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { AuthComponent } from './auth/auth.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component: ListProductComponent},
  {path:'panier',component:PanierComponent},
  {path:'productdetail/:id',component:DetailProductComponent},
  {path:'auth',component:AuthComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    ProductItemComponent,
    HeaderComponent,
    PanierComponent,
    DetailProductComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
