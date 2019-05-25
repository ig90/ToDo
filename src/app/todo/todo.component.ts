import { Component } from '@angular/core';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass'],

})
export class TodoComponent {

  items: any[] = [
    'task 1',
    'task 2',
    'task 3',
    'task 4',
    'task 5',
    'task 6'
  ];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = '';
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

}
