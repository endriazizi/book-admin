import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [LoginService]
})
export class DashboardComponent {
  admin: {};
  constructor(private __loginService: LoginService, private __router: Router) {
    var admin = localStorage.getItem("admin");
    this.admin = JSON.parse(admin);

  }
  logout(admin) {
    this.__loginService.logout(admin).subscribe(data => {
      data = null;
      this.admin = data;
      localStorage.removeItem("admin");
      this.__router.navigateByUrl('');
    });
  }
}
