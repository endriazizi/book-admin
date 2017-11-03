import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {

  constructor(private __http: Http) { }

  //Save new book
  addBook(book) {
    let headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    return this.__http.post('/book/book', book, options)
      .map(res => res.json());
  }

  //Get books
  getAllBooks() {
    return this.__http.get('/book/books')
      .map(res => res.json());
  }

  //Delete book
  deleteBook(id) {
    return this.__http.delete('/book/book/' + id)
      .map(res => res.json());
  }

  //Update
  saveEditBook(book) {
    console.log(book)
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.__http.put('/book/book/' + book._id, JSON.stringify(book), { headers: headers })
      .map(res => res.json());
  }
}
