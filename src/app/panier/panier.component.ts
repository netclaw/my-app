import { Component, OnInit } from '@angular/core';
import { ListProductComponent } from '../list-product/list-product.component';
import { PanierItem } from '../model/PanierItem';
import { PanierService } from '../service/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  panier!:PanierItem[];
  

  constructor(private panierService:PanierService) { }

  ngOnInit(): void {
    this.panier=this.panierService.panier;
  }

}
