//Juuso Heinonen 1600400

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';


@IonicPage({name: 'extra-page'})
@Component({
  selector: 'page-extra-curriculum',
  templateUrl: 'extra-curriculum.html',
})
export class ExtraCurriculumPage {

  constructor(public nav: NavController, public navParams: NavParams, private auth: AuthServiceProvider, public app: App) {

  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.app.getRootNav().setRoot('login-page') //hide tabs after logout
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExtraCurriculumPage');
  }

}
