import { Component } from '@angular/core';
import { OrderService } from '../services/order.service';
@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css'],
  providers: [OrderService]
})
export class OrderDetailComponent {

  orderDetailed: { status: number };
  currentStatus: string;

  constructor(private __orderService: OrderService) {
    var order = localStorage.getItem('order');
    this.orderDetailed = JSON.parse(order);
    //Exhibit the current status
    if (this.orderDetailed.status == 1) {
      this.currentStatus = "Ordered";
    } else if (this.orderDetailed.status == 2) {
      this.currentStatus = "Processing";
    } else if (this.orderDetailed.status == 3) {
      this.currentStatus = "Production";
    } else if (this.orderDetailed.status == 4) {
      this.currentStatus = "Shipped";
    } else if (this.orderDetailed.status == 5) {
      this.currentStatus = "Delivered";
    }
  }

  //Change status
  changeStatus2(order) {
    this.__orderService.changeStatus2(order).subscribe(data => {
      order.status = 2;
      localStorage.setItem('order', JSON.stringify(order));
      window.location.reload();
    })
  }
  changeStatus3(order) {
    this.__orderService.changeStatus3(order).subscribe(data => {
      order.status = 3;
      localStorage.setItem('order', JSON.stringify(order));
      window.location.reload();
    })
  }
  changeStatus4(order) {
    this.__orderService.changeStatus4(order).subscribe(data => {
      order.status = 4;
      localStorage.setItem('order', JSON.stringify(order));
      window.location.reload();
    })
  }
  changeStatus5(order) {
    this.__orderService.changeStatus5(order).subscribe(data => {
      order.status = 5;
      localStorage.setItem('order', JSON.stringify(order));
      window.location.reload();
    })
  }
}
