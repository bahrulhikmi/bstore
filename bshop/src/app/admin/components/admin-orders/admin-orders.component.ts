import { OrderService } from 'shared/services/order.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import dtLang from 'shared/resources/datatable-lang-id.json';


@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  orders;
  dtOptions: DataTables.Settings = {};

  dtTrigger: Subject<any> = new Subject<any>();

  constructor(orderService: OrderService) {
    orderService.getOrders().subscribe(orders => {
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
