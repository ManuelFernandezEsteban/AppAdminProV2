import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';
@Component({
  selector: 'app-grafica-donut',
  templateUrl: './grafica-donut.component.html',
  styleUrls: ['./grafica-donut.component.css']
})
export class GraficaDonutComponent implements OnInit {

  @Input () title:string='Sin título';

  @Input () labels:string[]=[];

  @Input () data:number[]=[];


  public doughnutChartLabels: string[] = this.labels;
  public doughnutChartData: ChartData<'doughnut'> = {
    
    labels: this.doughnutChartLabels,
    datasets: [
      { data: this.data }      
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';
  constructor() { 
    //console.log(this.title,this.labels,this.data)
  }

  ngOnInit(): void {
    this.doughnutChartLabels = this.labels;
    this.doughnutChartData={
      labels: this.doughnutChartLabels,
      datasets: [
        { data: this.data }
      ]
      }
  }

}
