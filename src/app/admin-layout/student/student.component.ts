import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../../services/admin-service.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  s1;
  s2;
  s3;
  

  constructor(
    private router: Router,
    private adminService: AdminServiceService
   
  ) { }

  ngOnInit() {

    this.adminService.blockTutorList()
    .subscribe(res =>{
        let data =res.json();
        this.s1 =data.s1[0];
        this.s2 =data.s2[1];
        this.s3 =data.s3[2];    
    })
  }
}
