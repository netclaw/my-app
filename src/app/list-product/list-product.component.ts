import { Component, EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PanierItem } from '../model/PanierItem';
import {Product} from '../model/Product';
import { PanierService } from '../service/panier.service';
import { ProduitService } from '../service/produit.service';
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products!:Observable<Product[]>;
  panier!:Product[];

  constructor(private produitService:ProduitService,private panierService:PanierService){}
  
  ngOnInit(): void {
    this.products=this.produitService.getAllProducts2();
    this.panier=new Array<Product>();

  }

  modProduct(p:Product){
    this.panier.push(p);
    console.log(p.id);
    console.log(p.libele);
    console.log(p.prix);
    this.panierService.panier.push(new PanierItem(1,p));
    console.log(this.panierService.panier[0]);


  }

  

}
