//Juuso Heinonen 1600400

import { Component } from '@angular/core';
import { IonicPage, AlertController, NavController, Loading, LoadingController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Http } from '@angular/http';


@IonicPage({name: 'login-page'})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;
  registerCredentials = {email: '', password: ''};

  constructor(private nav: NavController, private auth: AuthServiceProvider, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
  }

  public createAccount(){
    this.nav.push('register-page');
  }

  public login(){
    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if(allowed){
        this.nav.setRoot('menu-page');
      }else{
        this.showError('Incorrect email or password');
      }
    },
      error => {
        this.showError(error);
      });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

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
