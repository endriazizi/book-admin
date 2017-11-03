import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class CustomerService {

  constructor(private __http: Http) { }

  //Add
  addCustomer(customer) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.__http.post('/customer/customer', JSON.stringify(customer), { headers: headers })
      .map(res => res.json());
  }

  //Get
  getCustomer() {
    return this.__http.get('/customer/customers')
      .map(res => res.json());
  }

  //Delete
  deleteCustomer(id) {
    return this.__http.delete('/customer/customer/' + id)
      .map(res => res.json());
  }

  //Update
  saveUpdateCustomer(customer) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.__http.put('/customer/customer/' + customer._id, JSON.stringify(customer), { headers: headers })
      .map(res => res.json());
  }
}
