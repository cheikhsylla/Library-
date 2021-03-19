import { Component, OnInit } from '@angular/core';
import{BooksService} from '../books.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']
})
export class AllBooksComponent implements OnInit  {
  books:any;
  constructor( private book:BooksService) {


   }
   ngOnInit(){
     this.books=this.book.Books;
   }



}
