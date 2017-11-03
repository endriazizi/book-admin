import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class GenreService {

  constructor(private __http: Http) { }

  addGenre(genre) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.__http.post('/genre/genre', JSON.stringify(genre), { headers: headers })
      .map(res => res.json());
  }

  getGenres() {
    return this.__http.get('/genre/genres')
      .map(res => res.json());
  }

  saveUpdate(genre) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.__http.put('/genre/genre/' + genre._id, JSON.stringify(genre), { headers: headers })
      .map(res => res.json());
  }

  deleteGenre(id) {
    return this.__http.delete('/genre/genre/' + id)
      .map(res => res.json());
  }

}
