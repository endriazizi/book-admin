import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
@Injectable()
export class OrderService {

  constructor(private __http: Http) { }

  getOrders() {
    return this.__http.get('/order/orders')
      .map(res => res.json());
  }

  changeStatus2(order) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.__http.put('/order/order/' + order._id, JSON.stringify(order), { headers: headers })
      .map(res => res.json());
  }

  changeStatus3(order) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.__http.put('/order/order3/' + order._id, JSON.stringify(order), { headers: headers })
      .map(res => res.json());
  }

  changeStatus4(order) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.__http.put('/order/order4/' + order._id, JSON.stringify(order), { headers: headers })
      .map(res => res.json());

  }

  changeStatus5(order) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.__http.put('/order/order5/' + order._id, JSON.stringify(order), { headers: headers })
      .map(res => res.json());
  }
}
