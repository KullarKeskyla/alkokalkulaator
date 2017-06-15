import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EditTodo page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-edit-todo',
  templateUrl: 'edit-todo.html',
})
export class EditTodo {

    todo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.todo = { title : '', description : '' };
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad EditTodo');
    let todo = this.navParams.get('todo');

    if (typeof(todo) !== "undefined") {
        this.todo = todo;
    }
  }

save() {
    this.navCtrl.pop();
}
}
