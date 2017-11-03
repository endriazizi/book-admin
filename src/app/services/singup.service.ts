import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class SingupService {

  constructor(private __http: Http) { }

  addAdmin(admin) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.__http.post('admin/admin', JSON.stringify(admin), { headers: headers })
      .map(res => res.json());
  }

}
