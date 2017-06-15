import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
items: any;
  constructor(public navCtrl: NavController, public storage: Storage) {
  	this.storage.get('age').then((agedata) => {
  		this.items = agedata;
      	console.log(agedata);
  	});
  };
    save(val){
    console.log('data added '+val);
    this.storage.get('age').then((agedata) => {
      if(agedata != null)
      {
        agedata.push(val);
        this.storage.set('age', agedata);
      }
      else
      {
        let array = [];
        array.push(val);
        this.storage.set('age', array);
      }
    });
  };

}
