import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(private __loginService: LoginService, private __router: Router) { }
  
  //Login
  loginAdmin(event) {
    event.preventDefault();
    if (this.email == null || this.password == null) {
      console.log('Not allowed');
    } else {
      var login = {
        email: this.email,
        password: this.password
      }
      this.__loginService.loginAdmin(login).subscribe(data => {
        if (data !== null) {
          localStorage.setItem("admin", JSON.stringify(data));
          this.__router.navigateByUrl('dashboard');
        }
      });
    }
  }
}
