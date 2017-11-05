//Juuso Heinonen 1600400

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, App } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';


@IonicPage({name: 'about-page'})
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public nav: NavController, public navParams: NavParams, private auth: AuthServiceProvider, public app: App) {

  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.app.getRootNav().setRoot('login-page') //hide tabs after logout
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}
