import { Component } from '@angular/core';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass'],

})

export class TodoComponent {

  items: any[] = [
    {title: 'task1', isChecked: false, date: this.getDate()},
    {title: 'task2', isChecked: false, date: this.getDate()},
    {title: 'task3', isChecked: false, date: this.getDate()},
    {title: 'task4', isChecked: false, date: this.getDate()},
    {title: 'task5', isChecked: false, date: this.getDate()},
    {title: 'task6', isChecked: false, date: this.getDate()},

  ];

  addItem(input: HTMLInputElement) {
    const item = {
      title: input.value,
      isChecked: false,
      date: this.getDate()
    };
    this.items.splice(0, 0, item);
    input.value = '';
    console.log(item);
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

  crossOut(item) {

    if (item.isChecked === true) {
      this.removeItem(item);
      this.items.splice(0, 0, item);
    } else {
      this.items.splice(this.items.length, 1, item);
      this.removeItem(item);
    }
    item.isChecked = !item.isChecked;
  }

  getDate() {

    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getUTCDate();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

     return ''+ day+'/'+(month+1)+'/'+year+' '+hour+':'+minutes+':'+seconds;
   }

}

