import { Component } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers: [CustomerService]
})
export class CustomerComponent {

  name: string;
  lastName: string;
  email: string;
  password: string;
  confirm: string;
  country: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  gender: string;

  constructor(private __customerService: CustomerService, private __router: Router) {}
  //Get radio button gender. Couldn't figure out other way to accomplish this. 
  //For some reason the radio button won't work with [(ngModel)]. 
  //It just stops working. Tips are more than welcome.
  getMale() {
    this.gender = "male"
  }
  getFemale() {
    this.gender = "female"
  }
  addCustomer() {
    var customer = {
      name: this.name,
      lastName: this.lastName,
      email:  this.email,
      password: this.password,
      country: this.country,
      street: this.street,
      city: this.city,
      state: this.state,
      zip: this.zip,
      phone: this.phone,
      gender: this.gender,
    }
    this.__customerService.addCustomer(customer).subscribe(data => {
      swal('Registred!', 'This customer has been added.', 'success')
      this.__router.navigateByUrl('/dashboard');
    });
  }
}
