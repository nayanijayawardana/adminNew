

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piechart-tutor',
  templateUrl: './piechart-tutor.component.html',
  styleUrls: ['./piechart-tutor.component.scss']
})
export class PiechartTutorComponent implements OnInit {


  public chartType: string = 'pie';

  public chartDatasets: Array<any> = [
    { data: [300, 50, 100, 40, 120], label: 'Tutor users' }
  ];

  public chartLabels: Array<any> = ['Rathnapura', 'Galle', 'colombo', 'Gampaha', 'mathara'];

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }







  constructor() { }

  ngOnInit() {
  }

}







