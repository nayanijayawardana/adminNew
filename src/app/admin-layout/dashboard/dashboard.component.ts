import { Component, OnInit } from '@angular/core';

import { AdminServiceService } from '../../services/admin-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


    

    numberOfStudents;
    numberOfTutors;
    numberOfMassages;
    noOfTutorsMaths;
    noOfTutorsScience;
    noOfTutorsICT;
    noOfTutorsBiology;
    noOfTutorsPhysics;
    noOfTutorsSinhala;
    TAmpara;
    SAmpara;
    TAnu;
    SAnu;
   Tcolo;
   Scolo;
  
  
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
  
  
  constructor(
    private adminService: AdminServiceService
  ) { }
  
  
  
  
    ngOnInit() {
  
  
        this.adminService.adminData()
        .subscribe(res =>{
       let data = res.json();
       this.numberOfStudents = data.studentCount;
       this.numberOfTutors = data.tutorCount;
       this.numberOfMassages = data.msgCount;
    })
  
  
     this.adminService.tcount()
         .subscribe(res =>{
             let data = res.json();
             this.noOfTutorsMaths = data.Tcount[0];
             this.noOfTutorsScience = data.Tcount[1];
             this.noOfTutorsICT = data.Tcount[2];
             this.noOfTutorsBiology = data.Tcount[3];
             this.noOfTutorsPhysics = data.Tcount[4];
             this.noOfTutorsSinhala = data.Tcount[5];
           })
  
  
  
           this.adminService.districtwise()
           .subscribe(res =>{
               let data = res.json();
              this.TAmpara =data.Tcount[0];
              this.SAmpara =data.Scount[0];
              this.TAnu =data.Tcount[1];
              this.SAnu =data.Scount[1];
              this.Tcolo =data.Tcount[4];
              this.Scolo =data.Scount[4];
            
             })
  
  



  }

}












        
