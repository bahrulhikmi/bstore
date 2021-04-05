import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

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

  private getCart(cartId: string){
    return this.db.object('/shopping-carts/'+ cartId).valueChanges();
  }

  private getOrCreateCart(){
    let cartId = localStorage.getItem('cartId');
    if(!cartId){
      let result = this.create();
      this.create().then(result=>{
        localStorage.setItem('cartId', result.key)
        return this.getCart(result.key);
      });
      
    } else
      return this.getCart(cartId);
  }
}
