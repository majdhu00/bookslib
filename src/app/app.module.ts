import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddbookComponent } from './addbook/addbook.component';
import { BookInTheLibraryComponent } from './book-in-library/book-in-library.component';
import { BookOutLibraryComponent } from './book-out-library/book-out-library.component';
import { SettingsComponent } from './settings/settings.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const appRouting: Routes = [
  {path: "", component: HomeComponent},
  {path: "Addbook", component:AddbookComponent},
  {path: "library", component:BookInTheLibraryComponent},
  {path: "search", component:BookOutLibraryComponent},
  {path: "settings", component:SettingsComponent},
 
  ];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddbookComponent,
    BookInTheLibraryComponent,
    BookOutLibraryComponent,
    SettingsComponent,
    
  ],
  imports: [
    
    RouterModule.forRoot(appRouting),
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
