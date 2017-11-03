import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class LoginService {

  constructor(private __http: Http) { }

  loginAdmin(login) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.__http.post('/admin/login', JSON.stringify(login), { headers: headers })
      .map(res => res.json());
  }

  logout(admin) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.__http.post('/admin/logout', JSON.stringify(admin), { headers: headers })
      .map(res => res.json());
  }
}
