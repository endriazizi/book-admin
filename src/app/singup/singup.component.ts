import { Component, OnInit } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { SingupService } from '../services/singup.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css'],
  providers: [SingupService]
})
export class SingupComponent {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirm: string;

  constructor(private __singupService: SingupService, private __router: Router) { }

  addAdmin() {
    if (this.password !== this.confirm) {
      console.log('password should be the same');
    } else {
      var admin = {
        name: this.name,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
      }
      this.__singupService.addAdmin(admin).subscribe(data => {
        this.__router.navigateByUrl('');
      });
    }
  }

  loginAdmin(){
    
  }
}
