import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { take } from 'rxjs/operators';
import { Cart } from './models/cart';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  private create(){
    return this.db.list('/shopping-carts').push({
      dataCreated: new Date().getTime()
    });
  }

  async getCart(){
    let cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/'+ cartId).valueChanges();
  }

  private getItem(cartId: string, productId: string){
    return this.db.object('/shopping-carts/'+cartId+'/items/'+productId);
  }

  private async getOrCreateCartId(): Promise<string>{
    let cartId = localStorage.getItem('cartId');
    if(cartId) return cartId;

    let result = await this.create();    
    localStorage.setItem('cartId', result.key)
    return result.key;                     
  }

  async addToCart(product: Product){
    this.updateItemQuantity(product, 1);
  }

  async removeFromCart(product: Product){
    this.updateItemQuantity(product, -1);
  }

  private async updateItemQuantity(product:Product, change:number){
    let cartId = await this.getOrCreateCartId();    
    let item$ = this.getItem(cartId, product.key);
    item$.valueChanges().pipe(take(1)).subscribe(item=>{        
      item$.update({product: product, quantity: ( ((<Cart>item) && (<Cart>item).quantity) || 0 ) + change});
    });
  }
}

