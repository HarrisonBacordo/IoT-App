import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MonitorPage } from './monitor';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  declarations: [
    MonitorPage,
  ],
  imports: [
    IonicPageModule.forChild(MonitorPage),
    ChartsModule
  ],
})
export class MonitorPageModule {}
