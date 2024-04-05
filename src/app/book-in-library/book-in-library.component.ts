import { Component,OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-book-in-library',
  templateUrl: './book-in-library.component.html',
  styleUrls: ['./book-in-library.component.css']
})
export class BookInTheLibraryComponent implements OnInit {
  book: any;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.book = this.itemService.getFormData();
  }
  

}
