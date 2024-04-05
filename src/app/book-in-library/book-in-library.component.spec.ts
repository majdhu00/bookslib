import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookInLibraryComponent } from './book-in-library.component';

describe('BookInLibraryComponent', () => {
  let component: BookInLibraryComponent;
  let fixture: ComponentFixture<BookInLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookInLibraryComponent]
    });
    fixture = TestBed.createComponent(BookInLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
