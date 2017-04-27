import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoogleChart } from './google-chart';

@NgModule({
  declarations: [
    GoogleChart,
  ],
  imports: [
    IonicPageModule.forChild(GoogleChart),
  ],
  exports: [
    GoogleChart
  ]
})
export class GoogleChartModule {}
