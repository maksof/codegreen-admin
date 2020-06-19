import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit() {
    this.api.dashboardStats().subscribe(res=>{
      console.log(res)
    })
  }

  panelOpenState = false;

  // Pie chart data 2

  public pieChartOptions1: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
        color : ['rgb(39, 47, 63)', 'rgb(255,255,255)', 'rgb(255,255,255)'],
      },
    }
  };
  public pieChartLabels1: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  public pieChartData1: number[] = [300, 500, 100];
  public pieChartType1: ChartType = 'pie';
  public pieChartLegend1 = true;
  public pieChartPlugins1 = [pluginDataLabels];
  public pieChartColors1 = [
    {
      backgroundColor: ['rgb(240, 244, 247)', 'rgb(40, 101, 68)', 'rgb(46, 52, 64)'],
    },
  ];
  

  // Pie Chart Data 2

  public pieChartOptions2: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',

    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
        color : ['rgb(39, 47, 63)', 'rgb(255,255,255)', 'rgb(255,255,255)'],
      },
    }
  };
  public pieChartLabels2: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  public pieChartData2: number[] = [300, 500, 100];
  public pieChartType2: ChartType = 'pie';
  public pieChartLegend2 = true;
  public pieChartPlugins2 = [pluginDataLabels];
  public pieChartColors2 = [
    {
      backgroundColor: ['rgb(240, 244, 247)', 'rgb(40, 101, 68)', 'rgb(46, 52, 64)'],
    },
  ];

}
