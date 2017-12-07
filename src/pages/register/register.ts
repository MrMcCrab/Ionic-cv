//Juuso Heinonen 1600400

import { Component, ViewChild } from '@angular/core';
import { IonicPage, AlertController, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseProvider } from './../../providers/firebase/firebase';



@IonicPage({name: 'register-page'})
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('email') email;
  @ViewChild('password') password;

  constructor(private nav: NavController, private fireAuth: AngularFireAuth, private alertCtrl: AlertController) {
  }

  // Register a new user and add it to Firebase users list
  public register() {
    this.fireAuth.auth.createUserWithEmailAndPassword(this.email.value, this.password.value)
    .then(data => {
      this.alert('You have registered!');
      this.nav.setRoot( 'login-page' );
    })
    .catch(error => {
      this.alert(error.message);
    });
  }

  // Used to send alerts to user
  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
