import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoogleChart } from '../google-chart/google-chart';

/**
 * Generated class for the BloodPressure page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'blood-pressure',
  templateUrl: 'blood-pressure.html',
})
export class BloodPressure extends GoogleChart {

  private options;
  private data;
  private chart; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	super();
    console.log("Here is BloodPressureChart") 
  }
	drawGraph(){
	    console.log("DrawGraph BloodPressure...");  
	    this.data = this.createDataTable([
	      ['Year', 'Sales', 'Expenses'],
	          ['2004',  1000,      400],
	          ['2005',  1170,      460],
	          ['2006',  660,       1120],
	          ['2004',  1000,      400],
	          ['2005',  1170,      460],
	          ['2006',  660,       1120],
	          ['2004',  1000,      400],
	          ['2005',  1170,      460],
	          ['2006',  660,       1120],
	          ['2004',  1000,      400],
	          ['2005',  1170,      460],
	          ['2006',  660,       1120],
	          ['2004',  1000,      400],
	          ['2005',  1170,      460],
	          ['2006',  660,       1120],
	          ['2004',  1000,      400],
	          ['2005',  1170,      460],
	          ['2006',  660,       1120],
	          ['2004',  1000,      400],
	          ['2005',  1170,      460],
	          ['2006',  660,       1120],
	          ['2004',  1000,      400],
	          ['2005',  1170,      460],
	          ['2006',  660,       1120],
	          ['2007',  1030,      540]
	    ]);

	    this.options = {
	          title: 'Blood Pressure',
	          curveType: 'function',
	          legend: { position: 'bottom' }
	    };

	    this.chart = this.createLineChart(document.getElementById('chart_divEvolution'));
	    this.chart.draw(this.data, this.options);
	  }
}