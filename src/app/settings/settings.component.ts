import { Component } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  template: ` <button (click)="toggleDarkMode()">Toggle Dark Mode</button>`,
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  managers: string[] = [];
  newManager: string = '';
  errorMessage: string = '';
  constructor(private itemeService: ItemService) {}

  addManager=()=> {
    if (this.managers.length >= 2) {
      this.errorMessage = 'Error: You can only add up to two managers';
    } else {
      this.managers.push(this.newManager);
      this.newManager = '';
      this.errorMessage = ''; // Clear error message when successfully added a manager
    }
  }
  toggleDarkMode(){
    this.itemeService.toggleDarkMode();
  }
}
