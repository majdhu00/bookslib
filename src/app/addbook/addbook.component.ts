import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemService } from '../item.service';
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {
  selectedImage: File | string = '';
  constructor(private itemservice:ItemService){}
  onSubmit(form: NgForm) {
    const Book = {
      bookName: form.value.bookName,
      author: form.value.author,
      image: this.selectedImage,
      tags: form.value.tags,
      quantity: form.value.quantity
    };
    console.log(form)
    this.itemservice.setFormData(Book);
  }

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const files = inputElement.files;
    if (files && files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImage = reader.result as string;
      };
      reader.readAsDataURL(files[0]);
    }
  }
}
