//Juuso Heinonen 1600400

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, App } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';


@IonicPage({name: 'home-page'})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username = '';
  email = '';

  constructor(private nav: NavController, private auth: AuthServiceProvider, private app: App, public firebase: FirebaseProvider) {

    // Check is user is logged in, if not redirect to login page
    if (firebase.loginUser == " "){
      this.nav.setRoot('login-page');
      }
  }

  // Logout function sets the current user to an empty string
  // It also reloads the app to force the user to the login page
  public logout() {
    firebase.auth().signOut().then(() => {
      this.firebase.loginUser = " ";
      document.location.href = 'index.html';
    }, function(error) {
      console.log("Error!")
    });
  }
}
