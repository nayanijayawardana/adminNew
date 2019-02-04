import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../../services/admin-service.service';
@Component({
  selector: 'app-diswise',
  templateUrl: './diswise.component.html',
  styleUrls: ['./diswise.component.scss']
})
export class DiswiseComponent implements OnInit {

  TAmpara;
SAmpara;
TAnu;
SAnu;
Tcolo;
Scolo;

  constructor( private adminService: AdminServiceService) { }

  ngOnInit() {

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


