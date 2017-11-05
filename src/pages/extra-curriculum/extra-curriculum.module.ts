//Juuso Heinonen 1600400

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExtraCurriculumPage } from './extra-curriculum';

@NgModule({
  declarations: [ExtraCurriculumPage,],
  imports: [IonicPageModule.forChild(ExtraCurriculumPage),],
  exports: [ExtraCurriculumPage]
})
export class ExtraCurriculumPageModule {}
