import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {

    
  public chartType:string = 'bar';

  public chartDatasets:Array<any> = [


      {data: [1,55,5,56,62,8,69, ], label: 'Tutors'},
      {data: [80, 58, 40, 69, 86, 67, 90, 22, 7, 17, 18, 9], label: 'Student'}
  ];

  public chartLabels:Array<any> = ['Ampara', 'gampaha', 'kegalle', 'rathnapura', 'kurunegala', 'kandy', 'matara', 'galle', 'hambantota', 'matale', 'anuradapura', 'polonnarywa','ampara','badulla','mulathiw','halawatha','puttalama','mannar','jaffna','batticaloa'];

  public chartColors:Array<any> = [
      {
          backgroundColor: 'rgba(151, 150, 218, 0.466)',
          borderColor: 'rgba(109, 108, 204, 0.466)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(220,220,220,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(220,220,220,1)'
      },
      {
          backgroundColor: 'rgba(151,187,205,0.2)',
          borderColor: 'rgba(151,187,205,1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(151,187,205,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(151,187,205,1)'
      }
  ];

  public chartOptions:any = {
      responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }


  constructor() { }

  ngOnInit() {
  }

}
