import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBookComponent } from './add-book/add-book.component';
import { LendBookComponent } from './lend-book/lend-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, AddBookComponent, LendBookComponent, UpdateBookComponent],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

}
