import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the BatteryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-battery',
  templateUrl: 'battery.html',
})
export class BatteryPage {
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['living room', 'kitchen', 'dining room', 'toilet', 'bedroom'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  public barChartData:any[] = [
    {data: [100, 100, 100, 100, 100], label: 'Battery Levels'},
  ];

  constructor(public events: Events, public navCtrl: NavController, public navParams: NavParams) {
    events.subscribe('battery_level_update', (data) => {
      console.log("Event triggered")
      this.updateBatteryLevels(data)
    });
  }

  public updateBatteryLevels(data) {
    let clone = JSON.parse(JSON.stringify(this.barChartData));

    switch(data.location) {
      case 'living':
        clone[0].data[0] = data.battery_level;
        break;

      case 'kitchen':
        clone[0].data[1] = data.battery_level;
        break;

      case 'dining':
        clone[0].data[2] = data.battery_level;
        break;

      case 'toilet':
        clone[0].data[3] = data.battery_level;
        break;

      case 'bedroom':
        clone[0].data[4] = data.battery_level;
        break;
    }

    this.barChartData = clone;
  }



}
