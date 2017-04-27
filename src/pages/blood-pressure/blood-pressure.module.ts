import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BloodPressure } from './blood-pressure';

@NgModule({
  declarations: [
    BloodPressure,
  ],
  imports: [
    IonicPageModule.forChild(BloodPressure),
  ],
  exports: [
    BloodPressure
  ]
})
export class BloodPressureModule {}
