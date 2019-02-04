import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss'],
})

export class PiechartComponent implements OnInit{
  public chartType: string = 'pie';

  public chartDatasets: Array<any> = [
    { data: [30, 45, 10, 40, 72, 34, 23, 59, 8], label: 'District wise registerd student' }
  ];

  public chartLabels: Array<any> = ['colombo', 'Galle', 'Mathara', 'Kegalle', 'Rathnapura', 'kurunegala', 'Anuradapura', 'Gampaha', 'mathale'];

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360', '#FF8800', '#4285F4', '#f50057', '#00897b'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774', '#00897b'],
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
