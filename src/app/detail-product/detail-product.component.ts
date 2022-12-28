import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Product } from '../model/Product';
import { PanierService } from '../service/panier.service';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  p!:Product;
  mess:string='Ajouter au panier';
  @Output() clickedProduct=new EventEmitter<Product>();



  constructor(private router:ActivatedRoute,private productService:ProduitService,private panierService:PanierService) { }

  ngOnInit(): void {
    const productId=+this.router.snapshot.params['id'];
    // this.productService.getProductById2(productId).subscribe(x=>this.p=x)
    this.p=this.productService.getProductById(productId);
  }

  
  getColor():string{
    return this.p.availability ? 'green' : 'red';
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

}
