import { Component } from '@angular/core';
import { OrderService } from '../services/order.service';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers: [OrderService, CustomerService]
})
export class OrderComponent {
  orders = [];
  customers = [];
  customerObj: {}
  lengthOrders: number;
  constructor(private __orderService: OrderService, private __customerService: CustomerService, private __router: Router) {
    this.__customerService.getCustomer().subscribe(data => {
      this.customers = data;
    });

    this.__orderService.getOrders().subscribe(data => {
      this.orders = data;
      this.lengthOrders = this.orders.length;
      console.log(this.orders);
    });
  }
  //Send to order detailed.
  orderDetail(order) {
    localStorage.setItem('order', JSON.stringify(order));
    this.__router.navigateByUrl('/dashboard/order-detailed');
  }
}
