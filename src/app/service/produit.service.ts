import { Injectable } from '@angular/core';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  products:Product[]=[new Product(1,"TV samsung",7000,"data:image/jpeg;base64,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",true),
new Product(2,"iphone 11",8000,"data:image/jpeg;base64,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",true),
new Product(3,"Wii",4000,"data:image/jpeg;base64,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",false)];



  constructor() {}
  getAll():Array<Product>{
    return this.products;

  }
  getProductById(idc:number){
    return this.products.filter(x=>x.id==idc)[0];

  }
}

