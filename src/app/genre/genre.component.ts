import { Component, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
import { GenreService } from '../services/genre.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css'],
  providers: [GenreService]
})
export class GenreComponent {

  constructor(private __genreService: GenreService) {
    this.__genreService.getGenres().subscribe(data => {
      this.genres = data;
    });
  }

  name: string;
  genres = [];
  newGenre = {}

  // Open/Close modals
  modalActions = new EventEmitter<string | MaterializeAction>();
  editModal = new EventEmitter<string | MaterializeAction>();

  openModal() {
    this.modalActions.emit({ action: "modal", params: ['open'] });
  }
  closeModal() {
    this.modalActions.emit({ action: "modal", params: ['close'] });
    this.editModal.emit({ action: "modal", params: ['close'] });
  }

  addGenre() {
    var genre = {
      name: this.name
    }
    this.__genreService.addGenre(genre).subscribe(data => {
      this.genres.push(data);
    });
  }

  editGenre(genre) {
    this.editModal.emit({ action: "modal", params: ['open'] });
    this.newGenre = genre;
  }

  saveUpdate(genre) {
    this.__genreService.saveUpdate(genre).subscribe(data => {
      window.location.reload();
    });
  }

  deleteGenre(id) {
    this.__genreService.deleteGenre(id).subscribe(data => {
      for (var i = 0; i < this.genres.length; i++) {
        if (this.genres[i]._id == id) {
          this.genres.splice(i, 1);
        }
      }
    });
  }
}
