import { Component } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  providers: [CustomerService]
})
export class CustomerListComponent {

  customers = [];
  constructor(private __customerService: CustomerService, private __router: Router) {
    this.__customerService.getCustomer().subscribe(data => {
      this.customers = data;
    });
  }
  //Delete
  deleteCustomer(id) {
    let self = this;
    swal({
      title: 'Are you sure?',
      text: 'You will not be able to recover this user!',
      type: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then(
      function () {
        self.__customerService.deleteCustomer(id).subscribe(data => {
          for (var i = 0; i < self.customers.length; i++) {
            if (self.customers[i]._id == id) {
              self.customers.splice(i, 1)
            }
          }
        });
        swal(
          'Deleted!',
          'This customer has been deleted.',
          'success'
        )
      },
      function (dismiss) {
        if (dismiss === 'cancel') {
          swal(
            'Cancelled',
            'Customer is safe :)',
            'info'
          )
        }
      })
  }
  //Update
  editCustomer(customer) {
    localStorage.setItem('updateCustomer', JSON.stringify(customer));
    this.__router.navigateByUrl('/dashboard/updateCustomer');
  }
}
