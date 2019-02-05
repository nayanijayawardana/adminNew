import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../services/admin-service.service';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.scss']
})
export class TutorComponent implements OnInit {
  T1;
  T2;
  T3;


  constructor(
    private adminService: AdminServiceService
  ) { }

  ngOnInit() {


this.adminService.blockTutorList()
    .subscribe(res =>{
        let data =res.json();
        this.T1 =data.T1[0];
        this.T2 =data.T2[1];
        this.T3 =data.T3[2];
          
    })



  }

}



//this.adminService.districtwise()
//.subscribe(res =>{
  //  let data = res.json();
  // this.TAmpara =data.Tcount[0];
   //this.SAmpara =data.Scount[0];
  // this.TAnu =data.Tcount[1];
  // this.SAnu =data.Scount[1];
   //this.Tbad =data.Tcount[2];
   //this.Sbad =data.Scount[2];
   //this.Tbat =data.Tcount[3];
   //this.Sbat =data.Scount[3];
   //this.Tcolo =data.Tcount[4];
   //this.Scolo =data.Scount[4];
 
//  })