import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private db: AngularFireDatabase,
    private shoppingCartService: ShoppingCartService) {
  }

  async placeOrder(order) {
    let result = await this.db.list('/orders').push(order);
    this.shoppingCartService.clearCart();
    return result;
  }

  getOrders() {
    return this.db.list('/orders', query =>
      query.orderByChild('datePlaced')).valueChanges();
  }

  getOrdersByUser(userId: string) {
    return this.db.list('/orders', query =>
      query.orderByChild('userId').equalTo(userId)
    ).valueChanges();
  }
}
