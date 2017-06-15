import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditTodo } from '../edit-todo/edit-todo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    todos: any;

  constructor(public navCtrl: NavController) {
      this.todos = [
          {title: 'Vaja üles ärgata', description :'First things first'},
          {title: 'Süvva', description :'Second'},
          {title: 'Wash', description :'Third'},
          {title: 'Riidesse', description :'Fourth'},
          {title: 'Magama', description :'Last'}
      ];
  }
ionViewDidLoad() {

}
addTodo() {
    //console.log("Lisa uus Tuutu");
    this.navCtrl.push(EditTodo);
}
editTodo(todo) {
    //console.log("Redigeerimine");
    this.navCtrl.push(EditTodo, {
        todo : todo
    });
}
}
