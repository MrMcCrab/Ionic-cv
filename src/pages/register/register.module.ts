//Juuso Heinonen 1600400

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';
import { IonicPage } from 'ionic-angular';

@NgModule({
  declarations: [RegisterPage,],
  imports: [IonicPageModule.forChild(RegisterPage),],
  exports: [RegisterPage,],
})
export class RegisterPageModule {}
