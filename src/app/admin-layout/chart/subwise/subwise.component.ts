import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../../services/admin-service.service';
@Component({
  selector: 'app-subwise',
  templateUrl: './subwise.component.html',
  styleUrls: ['./subwise.component.scss']
})
export class SubwiseComponent implements OnInit {

  noOfTutorsMaths;
    noOfTutorsScience;
    noOfTutorsICT;
    noOfTutorsBiology;
    noOfTutorsPhysics;
    noOfTutorsSinhala;

  constructor( private adminService: AdminServiceService) { }

  ngOnInit() {
  
  
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
  
  }


}
