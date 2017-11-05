//Juuso Heinonen 1600400

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CvPage } from './cv';

@NgModule({
  declarations: [CvPage,],
  imports: [IonicPageModule.forChild(CvPage),],
  exports: [CvPage]
})
export class CvPageModule {}
