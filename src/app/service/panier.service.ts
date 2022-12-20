import { Injectable } from '@angular/core';
import { PanierItem } from '../model/PanierItem';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  panier:PanierItem[]=new Array<PanierItem>();

  constructor() { }
}

