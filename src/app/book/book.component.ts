import { Component, EventEmitter } from '@angular/core';
import { BookService } from '../services/book.service';
import { ViewChild } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { MaterializeAction } from 'angular2-materialize';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [BookService]
})
export class BookComponent {
  @ViewChild('fileInput') fileInput;

  title: string;
  author: string;
  description: string;
  pages: string;
  price: string;
  language: string;
  publisher: string;
  pubDate: string;
  books = [];
  booksTotal: number;
  constructor(private __bookService: BookService, private __router: Router) {
    //Get books
    this.__bookService.getAllBooks().subscribe(data => {
      this.books = data;
      this.booksTotal = this.books.length;
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
  addBook() {
    this.formData.append('title', this.title);
    this.formData.append('author', this.author);
    this.formData.append('description', this.description);
    this.formData.append('pages', this.pages);
    this.formData.append('price', this.price);
    this.formData.append('language', this.language);
    this.formData.append('publisher', this.publisher);
    this.formData.append('pubDate', this.pubDate);
    this.__bookService.addBook(this.formData).subscribe(data => {
      this.books.push(data);
    });
  }

  //Delete book
  deleteBook(id) {
    let self = this;
    swal({
      title: 'Are you sure?',
      text: 'You will not be able to recover this file!',
      type: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then(

      function () {
        self.__bookService.deleteBook(id).subscribe(data => {
          for (var i = 0; i < self.books.length; i++) {
            if (self.books[i]._id == id) {
              self.books.splice(i, 1)
            }
          }
        });
        swal(
          'Deleted!',
          'This book has been deleted.',
          'success'
        )
      },

      function (dismiss) {
        if (dismiss === 'cancel') {
          swal(
            'Cancelled',
            'Book is safe :)',
            'info'
          )
        }
      })
  };

  //Go to edit page
  editBook(book) {
    localStorage.setItem('editBook', JSON.stringify(book));
    this.__router.navigateByUrl('/dashboard/editBook');
  }
  //Open/Close modal
  modalActions = new EventEmitter<string | MaterializeAction>();
  openModal() {
    this.modalActions.emit({ action: "modal", params: ['open'] });
  }
  closeModal() {
    this.modalActions.emit({ action: "modal", params: ['close'] });
  }
}
