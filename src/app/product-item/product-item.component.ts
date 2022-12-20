import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../model/Product';
import { PanierService } from '../service/panier.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  
    @Input() p!:Product;
    @Output() clickedProduct=new EventEmitter<Product>();
    mess:string='Ajouter au panier';



  ngOnInit(): void {
  }
  constructor(private panierService:PanierService){

  }

  clicked(p:Product){
    if(this.mess=='Ajouter au panier'){
      this.clickedProduct.emit(p);
      this.mess='Retirer du panier';
    }
    else{
      this.mess='Ajouter au panier';
      this.panierService.panier=this.panierService.panier.filter(x=>x.product.id!=p.id);
      

    }

  }
  getColor():string{
    return this.p.availability ? 'green' : 'red';
  }
  

}
