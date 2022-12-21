import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Product } from '../model/Product';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  p!:Product;
  mess:string='Ajouter au panier';


  constructor(private router:ActivatedRoute,private productService:ProduitService) { }

  ngOnInit(): void {
    const productId=+this.router.snapshot.params['id'];
    this.p=this.productService.getProductById(productId);
  }

  
  getColor():string{
    return this.p.availability ? 'green' : 'red';
  }

}
