import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BatteryPage } from './battery';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    BatteryPage,
  ],
  imports: [
    IonicPageModule.forChild(BatteryPage),
    ChartsModule
  ],
})
export class BatteryPageModule {}
