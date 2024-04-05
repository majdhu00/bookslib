import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookOutLibraryComponent } from './book-out-library.component';

describe('BookOutLibraryComponent', () => {
  let component: BookOutLibraryComponent;
  let fixture: ComponentFixture<BookOutLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookOutLibraryComponent]
    });
    fixture = TestBed.createComponent(BookOutLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
