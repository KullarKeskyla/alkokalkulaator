import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Samplemodal } from './samplemodal';

@NgModule({
  declarations: [
    Samplemodal,
  ],
  imports: [
    IonicPageModule.forChild(Samplemodal),
  ],
  exports: [
    Samplemodal
  ]
})
export class SamplemodalModule {}
