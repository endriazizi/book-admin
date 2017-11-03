import { Component } from '@angular/core';
import { BookService } from '../services/book.service';
import { GenreService } from '../services/genre.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
  providers: [BookService, GenreService]
})
export class AddBookComponent {

  title: string;
  author: string;
  description: string;
  pages: string;
  price: string;
  language: string;
  publisher: string;
  pubDate: string;
  genres = [];
  
  constructor(private __bookService: BookService, private __genreService: GenreService) {
    this.__genreService.getGenres().subscribe(data => {
      this.genres = data;
    })
  }

  //Get image
  formData: FormData;
  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append('uploadFile', file, file.name);
      this.formData = formData;
    }
  }

  //Save new book
  addBook(genre) {
    this.formData.append('title', this.title);
    this.formData.append('author', this.author);
    this.formData.append('description', this.description);
    this.formData.append('pages', this.pages);
    this.formData.append('price', this.price);
    this.formData.append('language', this.language);
    this.formData.append('publisher', this.publisher);
    this.formData.append('pubDate', this.pubDate);
    this.formData.append('genreName', genre.name);
    this.formData.append('genreId', genre._id);
    this.__bookService.addBook(this.formData).subscribe(data => {
      this.formData = null;
      window.location.reload();
    });
  }
}
