import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private booksSubject = new BehaviorSubject<any[]>([]);
  books = this.booksSubject.asObservable(); 
  book: string = " ";
 

  constructor() { }

  setFormData=(formData: any)=> {
    this.book = formData;
  }

  getFormData=()=> {
    return this.book;
  }
 toggleDarkMode= () =>{

  
  document.body.classList.toggle('dark-mode');
 };
  

  
}
