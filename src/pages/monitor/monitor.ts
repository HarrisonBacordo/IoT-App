import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Events } from 'ionic-angular';
import moment from 'moment';
import { Msg } from './Msg';
import 'rxjs/add/observable/interval';
import { Observable } from 'rxjs/Observable';
declare var Paho : any;

/**
 * Generated class for the MonitorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-monitor',
  templateUrl: 'monitor.html',
})
export class MonitorPage {
  private mqttStatus: string = 'Disconnected';
  private mqttClient: any = null;
  private message: any = '';
  private currentMessage: Msg = null;
  private messageToSend: string = 'Your message';
  private topic: string = 'swen325/a3';
  private clientId: string = 'bacordharr';
  private sub: any;
  private lastMotion: number = 0;
  private lastLocation: string;
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
	responsive: true,
	title: {
		display: true,
		text: 'Motion Frequency in Each Room',
	},
  };
  public barChartLabels:string[] = ['living room', 'kitchen', 'dining room', 'toilet', 'bedroom'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = false;
  public barChartData:any[];

  constructor(public events: Events, public navCtrl: NavController, private alertCtrl: AlertController) {
    this.sub = Observable.interval(60000).subscribe(() => this.check())
    this.lastLocation = "Not yet found"
    this.lastMotion = 0;
    this.barChartData = [
      {data: [0, 5, 3, 2, 7]},
    ]
  }

  public check = () => {
    // Only update last motion time if we have connected
    if(this.lastMotion != -1) {
      this.lastMotion += 1;
    }
    if(this.lastMotion == 5) {
      this.alert("No motion has been detected in the past 5 minutes. We strongly recommend you check the senior")
    }
  }

  public connect = () => {
  	this.mqttStatus = 'Connecting...';
  	this.mqttClient = new Paho.MQTT.Client('bacordharr@barretts.ecs.vuw.ac.nz', 8883, '/mqtt', this.clientId);

  	// set callback handlers
  	this.mqttClient.onConnectionLost = this.onConnectionLost;
  	this.mqttClient.onMessageArrived = this.onMessageArrived;

  	// connect the client
  	console.log('Connecting to mqtt via websocket');
  	//this.mqttClient.connect({timeout:10, userName:'ptweqash', password:'ncU6vlGPp1mN', useSSL:true, onSuccess:this.onConnect, onFailure:this.onFailure});
  	this.mqttClient.connect({useSSL:false, onSuccess:this.onConnect, onFailure:this.onFailure});
  }

  public disconnect () {
  	if(this.mqttStatus == 'Connected') {
  		this.mqttStatus = 'Disconnecting...';
  		this.mqttClient.disconnect();
  		this.mqttStatus = 'Disconnected';
  	}
  }

  public sendMessage = () => {
  	if(this.mqttStatus == 'Connected') {
  		this.mqttClient.publish(this.topic, this.messageToSend);
  	}
  }

  public onConnect = () => {
  	console.log('Connected');
  	this.mqttStatus = 'Connected';
    this.lastMotion = 0;
  	// subscribe
  	this.mqttClient.subscribe(this.topic);
  }

  public onFailure = (responseObject) => {
  	console.log('Failed to connect');
  	this.mqttStatus = 'Failed to connect';
  }

  public onConnectionLost = (responseObject) => {
   	if (responseObject.errorCode !== 0) {
   		this.mqttStatus = 'Disconnected';
  	}
  }

  public onMessageArrived = (message) => {
  	console.log('Received message ' + message.payloadString);
  	this.message = message.payloadString;
    let temp = message.payloadString;
    // split message
    let splitMessage = temp.split(',')

    let location = splitMessage[1]
    let motionStatus = splitMessage[2]
    let batteryLevel = splitMessage[3]

    // Motion detected
    if(motionStatus == 1) {
      this.lastMotion = 0;
      this.lastLocation = location;
      this.updateChart(location)
    }

    // // Send update to battery status tab
    this.events.publish('battery_level_update',
      { location , batteryLevel }
    );
  }

  private updateChart(location: string) {
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    switch(location) {
      case 'living room':
        clone[0].data[0] += 1;
        break;

      case 'kitchen':
        clone[0].data[1] += 1;
        break;

      case 'dining room':
        clone[0].data[2] += 1;
        break;

      case 'toilet':
        clone[0].data[3] += 1;
        break;

      case 'bedroom':
        clone[0].data[4] += 1;
        break;
    }

    this.barChartData = clone;
  }

  private alert = (msg) => {
    let alert = this.alertCtrl.create({
      title: 'Alert',
      subTitle: msg,
      buttons: ['Dismiss']
    });

    alert.present();
  }

}
