import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { MatCard, MatCardTitle, MatCardContent } from '@angular/material/card';
import { NgChartsModule } from 'ng2-charts';
// import { ChartData, ChartOption, DonutChartView, PieChartView } from 'ngx-chart';

@Component({
    selector: 'app-graph',
    templateUrl: './graph.component.html',
    styleUrls: ['./graph.component.scss'],
    imports: [MatCard, MatCardTitle, MatCardContent, NgChartsModule]
})
export class GraphComponent {

  data: number[] = [25, 22, 20, 15, 10, 8];
  labels: string[] = ['Python', 'C', 'Java', 'C#', 'JavaScript', 'Swift'];
  options: any = { 
    responsive: true, 
    aspectRatio: 2,
    plugins: {
      legend: {
        display: true, 
        position: 'right',
      },
    },
  };

  constructor() { }

  // Doughnut
  public doughnutChartDataset = [ { data: this.data }, ];
  public doughnutChartLabels: string[] = this.labels;
  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = this.options;

  // Pie
  public pieChartDataset = [ { data: this.data } ];
  public pieChartLabels = this.labels;
  public pieChartOptions: ChartOptions<'pie'> = this.options;

  // Line
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: this.labels,
    datasets: [
      {
        data: this.data,
        label: 'Languges',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = this.options;

  // Bar
  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Langugages'],
    datasets: [ 
      { data: [ this.data[0] ], label: this.labels[0] }, 
      { data: [ this.data[1] ], label: this.labels[1] }, 
      { data: [ this.data[2] ], label: this.labels[2] }, 
      { data: [ this.data[3] ], label: this.labels[3] }, 
      { data: [ this.data[4] ], label: this.labels[4] }, 
      { data: [ this.data[5] ], label: this.labels[5] }, 
    ],
  };
  public barChartLabels: string[] = this.labels;
  public barChartOptions: ChartConfiguration<'bar'>['options'] = this.options;

}
