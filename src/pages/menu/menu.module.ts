//Juuso Heinonen 1600400

import { NgModule } from '@angular/core';
import { IonicPageModule, IonicPage } from 'ionic-angular';
import { MenuPage } from './menu';

@NgModule({
  declarations: [MenuPage,],
  imports: [IonicPageModule.forChild(MenuPage),],
  exports: [MenuPage],
})
export class MenuPageModule {}
