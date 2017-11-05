//Juuso Heinonen 1600400

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { IonicPage } from 'ionic-angular';

@NgModule({
  declarations: [LoginPage,],
  imports: [IonicPageModule.forChild(LoginPage),],
  exports: [LoginPage],
})
export class LoginPageModule {}
