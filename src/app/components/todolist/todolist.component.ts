import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  public keyword: string;
  public todolist: any[] = [];

  constructor() {}

  ngOnInit() {}

  doAdd(e) {
    if (e.keyCode == 13) {
      if (!this.todolistHasKeyword(this.todolist, this.keyword)) {
        this.todolist.push({
          title: this.keyword,
          status: 0
        });

        this.keyword = '';
      } else {
        alert('Data already exists');
        this.keyword = '';
      }
    }
  }

  deleteDate(key) {
    this.todolist.splice(key, 1);
  }

  todolistHasKeyword(todolist: any, keyword: any) {
    // todolist.forEach(value => {
    //   if(value.title==keyword){
    //     return true;
    //   }            
    // });
    for (let index = 0; index < todolist.length; index++) {
      if (todolist[index].title == keyword) {
        return true;
      }
    }
    return false;
  }

}
