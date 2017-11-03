import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { GenreService } from '../services/genre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
  providers: [BookService, GenreService]
})
export class EditBookComponent {

  book: {};
  genres = [];
  constructor(private __bookSerivce: BookService,
    private __router: Router,
    private __genreService: GenreService) {
    var book = localStorage.getItem("editBook");
    this.book = JSON.parse(book);
    //Get genres to modify.
    this.__genreService.getGenres().subscribe(data => {
      this.genres = data;
    });

  }
  //Save book modification;
  saveEditBook(book) {
    console.log(book);
    localStorage.removeItem("editBook");
    this.__bookSerivce.saveEditBook(book).subscribe(data => {
      this.__router.navigateByUrl('/dashboard/book');
    });
  }
}
