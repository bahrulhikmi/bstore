import { Component, OnInit } from '@angular/core';
import { AppUser } from 'shared/models/app-user';
import { AuthService } from 'shared/services/auth.service';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';


@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

  appUser: AppUser;
  shoppingCartItemCount: number;
  isCollapsed = true;

  constructor(private auth: AuthService, private shoppingCartService: ShoppingCartService) {
  }

  logout() {
    this.auth.logout();
  }

  async ngOnInit() {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
    let cart$ = await this.shoppingCartService.getCart();

    cart$.subscribe(cart => {
      this.shoppingCartItemCount = cart.totalItemsCount;
    });

  }

}
