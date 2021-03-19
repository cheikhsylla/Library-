import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService  {

  constructor() { }
  Books = [
    {
      category:'Informatique',
      // name:['Python for beginner','Javascript from novice to ninja','Perl concept']
    },
    {
      category:'Mathematique',
      // name:['Python for beginner','Javascript from novice to ninja','Perl concept']
    },

  ]
}
