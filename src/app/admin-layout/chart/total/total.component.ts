import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../../services/admin-service.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss']
})
export class TotalComponent implements OnInit {

  numberOfStudents;
  numberOfTutors;
  numberOfMassages;

  constructor(private adminService:AdminServiceService) { }

  ngOnInit() {
      
    this.adminService.adminData()
    .subscribe(res =>{
   let data = res.json();
   this.numberOfStudents = data.studentCount;
   this.numberOfTutors = data.tutorCount;
   this.numberOfMassages = data.msgCount;
})

  }

}
