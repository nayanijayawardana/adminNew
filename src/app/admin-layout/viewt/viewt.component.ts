import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../services/admin-service.service';

@Component({
  selector: 'app-viewt',
  templateUrl: './viewt.component.html',
  styleUrls: ['./viewt.component.scss']
})
export class ViewtComponent implements OnInit {

 


  constructor(
    private viewService: AdminServiceService
  ) { }

  ngOnInit() {
  
  }

}
