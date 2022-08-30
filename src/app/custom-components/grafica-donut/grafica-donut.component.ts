import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';
@Component({
  selector: 'app-grafica-donut',
  templateUrl: './grafica-donut.component.html',
  styleUrls: ['./grafica-donut.component.css']
})
export class GraficaDonutComponent implements OnInit {
  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ] },
      { data: [ 50, 150, 120 ] },
      { data: [ 250, 130, 70 ] }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';
  constructor() { }

  ngOnInit(): void {
  }

}
