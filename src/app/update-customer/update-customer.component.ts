import { Component } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css'],
  providers: [CustomerService]
})
export class UpdateCustomerComponent {

  customer: {};
  gender: string;

  constructor(private __customerService: CustomerService, private __router: Router) {
    var customer = localStorage.getItem("updateCustomer");
    this.customer = JSON.parse(customer);
  }

  getMale() {
    this.gender = "Male"
  }

  getFemale() {
    this.gender = "Female"
  }

  saveUpdateCustomer(customer) {
    customer.gender = this.gender;
    this.__customerService.saveUpdateCustomer(customer).subscribe(data => {
      swal('Updated', 'Customer updated', 'success');
      this.__router.navigateByUrl('/dashboard/customerList');
    });
  }

}
