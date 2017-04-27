import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GoogleChart page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'google-chart',
  templateUrl: 'google-chart.html',
})
export class GoogleChart implements OnInit {

	private static googleLoaded: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  getGoogle() {
      return google;
  }
  ngOnInit() {
    console.log('ngOnInit');
    if (!GoogleChart.googleLoaded) {
      GoogleChart.googleLoaded = true;
      google.charts.load('current',  {packages: ['corechart', 'bar']});
    }
    google.charts.setOnLoadCallback(() => this.drawGraph());
  }

  drawGraph() {
      //console.log('DrawGraph base class!!!!');
  }

  createLineChart(element: any): any {
      return new google.visualization.LineChart(element);
  }

  createDataTable(array: any[]): any {
      return google.visualization.arrayToDataTable(array);
  }
}