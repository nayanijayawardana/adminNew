import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../../services/admin-service.service';


@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})


export class BarchartComponent implements OnInit {
    Tcount;
    Scount;
    TAmpara;
    SAmpara;
    Tcolo;
    Scolo;

  public chartType:string = 'bar';

  public chartDatasets:Array<any> = [
      
     // {data: [], label: 'Tutors'},
      //{data: [], label: 'Student'}
      {data: [6,9,16,15,3,11,4], label: 'Tutors'},
      {data: [2,7,8,13,5,9,3], label: 'Student'},
  ];

  public chartLabels:Array<any> = ['colombo','ampara','Rathnapura', 'kegalle','galle', 'gampha','kandy'];
 
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

  


 constructor(
    private adminService: AdminServiceService
 ) { }

 ngOnInit() {

    this.adminService.districtwise()
    .subscribe(res =>{
        let data = res.json();
       this.TAmpara =data.Tcount[0];
       this.SAmpara =data.Scount[0];
   
       //this.Tbad =data.Tcount[2];
       //this.Sbad =data.Scount[2];
       //this.Tbat =data.Tcount[3];
       //this.Sbat =data.Scount[3];
       this.Tcolo =data.Tcount[4];
       this.Scolo =data.Scount[4];

  })
 }
}
