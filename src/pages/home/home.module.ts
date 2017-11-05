//Juuso Heinonen 1600400

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { IonicPage } from 'ionic-angular';

@NgModule({
  declarations: [HomePage],
  imports: [IonicPageModule.forChild(HomePage)],
  exports: [HomePage],
})
export class HomePageModule { }
