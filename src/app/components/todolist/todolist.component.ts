import {
  Component,
  OnInit
} from '@angular/core';

import { StorageService } from "../../services/storage.service";

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  public keyword: string;
  public todolist: any[] = [];

  constructor(public storage:StorageService) {}

  ngOnInit() {
    var todolist:any=this.storage.get('todolist');
    if (todolist) {
      this.todolist=todolist;
    }
  }

  doAdd(e) {
    if (e.keyCode == 13) {
      if (!this.todolistHasKeyword(this.todolist, this.keyword)) {
        this.todolist.push({
          title: this.keyword,
          status: 0
        });

        this.keyword = '';
        this.storage.set('todolist',this.todolist);
      } else {
        alert('Data already exists');
        this.keyword = '';
      }
    }
  }

  deleteDate(key) {
    this.todolist.splice(key, 1);
    this.storage.set('todolist',this.todolist);
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

  checkboxChange(){
    this.storage.set('todolist',this.todolist);
  }

}
