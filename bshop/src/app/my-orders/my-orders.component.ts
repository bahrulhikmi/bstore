import { switchMap } from 'rxjs/operators';
import { OrderService } from 'shared/services/order.service';
import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import dtLang from 'app/resources/datatable-lang-id.json';


@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  orders;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(authService: AuthService,
    orderService: OrderService) {
    authService.user$.pipe(switchMap(u => orderService.getOrdersByUser(u.uid)))
      .subscribe(orders => {
        this.orders = orders;
        this.dtTrigger.next();
      }
      );
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      language: dtLang
    };
  }

}
