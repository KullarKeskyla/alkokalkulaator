import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

@Injectable()
export class Data {

    todos: any = [];

  constructor(public http: Http, public storage: Storage) {
    console.log('Hello Data Provider');
  }
  load() {
      return new Promise(resolve =>{
          if (this.todos.length > 0) {
              resolve (this.todos);
          } else {
              this.storage.get('todoData').then((todos)=> {
                  if (todos && typeof(todos) !== "undefined") {
                      this.todos = todos;
                  }
              resolve(this.todos);
          })
      }
      });
  }
  save(todo) {
      let index = this.todos.indexOf(todo);

      if (index === -1) {
          this.todos.push(todo);
      } else {
          this.todos[index] = todo;
      }
      this.storage.set('todoData', this.todos);
  }

}
