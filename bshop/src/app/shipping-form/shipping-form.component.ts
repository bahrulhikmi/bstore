import { ShoppingCart } from './../models/shopping-cart';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Order } from '../models/order';
import { AuthService } from '../auth.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  shipping: any = {};
  userId: string;
  userSubscription: Subscription;

  @Input("cart") cart: ShoppingCart;

  constructor(
    private authService: AuthService,
    private orderService: OrderService,
    private router: Router
  ) {
  }
  ngOnInit(): void {
    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }


  async save() {
    let order = new Order(this.userId, this.shipping, this.cart);
    let result = await this.orderService.placeOrder(order);
    this.router.navigate(['/order-success', result.key]);

  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
