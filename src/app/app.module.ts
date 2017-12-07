import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { AngularFireDatabase } from 'angularfire2/database';

var config = {
    apiKey: "AIzaSyD2O0DjgGm6DXMT-JiinFxbPltVgWzhwXM",
    authDomain: "mobiledev-b59ca.firebaseapp.com",
    databaseURL: "https://mobiledev-b59ca.firebaseio.com",
    projectId: "mobiledev-b59ca",
    storageBucket: "mobiledev-b59ca.appspot.com",
    messagingSenderId: "555632246536"
  };


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    HttpModule,
    StatusBar,
    SplashScreen,
    FirebaseProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
    AngularFireDatabase,
    AuthServiceProvider,
  ]
})
export class AppModule {}
