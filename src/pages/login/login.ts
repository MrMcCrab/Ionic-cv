//Juuso Heinonen 1600400

import { Component, ViewChild } from '@angular/core';
import { IonicPage, AlertController, NavController, Loading, LoadingController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseProvider } from './../../providers/firebase/firebase';


@IonicPage({name: 'login-page'})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('email') email;
  @ViewChild('password') password;

  constructor(private nav: NavController, private fireAuth: AngularFireAuth, private alertCtrl: AlertController, private loadingCtrl: LoadingController, public firebase: FirebaseProvider) {
  }


  public createAccount(){
    this.nav.push('register-page');
  }


  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }


  login() {
    this.fireAuth.auth.signInWithEmailAndPassword(this.email.value, this.password.value)
    .then( data => {

      this.nav.setRoot( 'menu-page' );
    })
    .catch( error => {
      console.log('Error: ', error);
      this.alert(error.message);
    })
    // Sets login user
    this.firebase.loginUser = String(this.email.value);
  }



  showError(text) {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
