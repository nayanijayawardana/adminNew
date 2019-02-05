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
Tbad;
Sbad;
Tbat;
Sbat;
Tcolo;
Scolo;
Tgalle;
Sgalle;
Tgam;
Sgam;
Tham;
Sham;
Tjaf;
Sjaf;
Tkalu;
Skalu;
Tkandy;
Skandy;
Tkegl;
Skegl;
Tkili;
Skili;
Tkuru;
Skuru;
Tman;
Sman;
Tmatale;
Smatale;
Tmatara;
Smatara;
Tmona;
Smona;
Tmul;
Smul;
TNeliya;
SNeliya;
Tpolo;
Spolo;
Tput;
Sput;
Tratna;
Sratna;
Ttrinco;
Strinco;
Tvav;
Svav;


  constructor( private adminService: AdminServiceService) { }

  ngOnInit() {

    this.adminService.districtwise()
    .subscribe(res =>{
        let data = res.json();
       this.TAmpara =data.Tcount[0];
       this.SAmpara =data.Scount[0];
       this.TAnu =data.Tcount[1];
       this.SAnu =data.Scount[1];
       this.Tbad =data.Tcount[2];
       this.Sbad =data.Scount[2];
       this.Tbat =data.Tcount[3];
       this.Sbat =data.Scount[3];
       this.Tcolo =data.Tcount[4];
       this.Scolo =data.Scount[4];

       this.Tgalle =data.Tcount[5];
       this.Sgalle =data.Scount[5];

       this.Tgam =data.Tcount[6];
       this.Sgam =data.Scount[6];

       this.Tham =data.Tcount[7];
       this.Sham =data.Scount[7];

       this.Tjaf =data.Tcount[8];
       this.Sjaf =data.Scount[8];

       this.Tkalu =data.Tcount[9];
       this.Skalu =data.Scount[9];

       this.Tkandy =data.Tcount[10];
       this.Skandy =data.Scount[10];

       this.Tkegl =data.Tcount[11];
       this.Skegl =data.Scount[11];

       this.Tkili =data.Tcount[12];
       this.Skili =data.Scount[12];

       this.Tkuru =data.Tcount[13];
       this.Skuru =data.Scount[13];
     
       this.Tman =data.Tcount[14];
       this.Sman =data.Scount[14];
     
       this.Tmatale =data.Tcount[15];
       this.Smatale =data.Scount[15];
     
       this.Tmatara =data.Tcount[16];
       this.Smatara =data.Scount[16];
     
       this.Tmona =data.Tcount[17];
       this.Smona =data.Scount[17];
     
       this.Tmul =data.Tcount[18];
       this.Smul =data.Scount[18];
     
       this.TNeliya =data.Tcount[19];
       this.SNeliya =data.Scount[19];

       this.Tpolo =data.Tcount[20];
       this.Spolo =data.Scount[20];
     
       this.Tput =data.Tcount[21];
       this.Sput =data.Scount[21];
     
       this.Tratna =data.Tcount[22];
       this.Sratna =data.Scount[22];

       this.Ttrinco =data.Tcount[23];
       this.Strinco =data.Scount[23];
     
       this.Tvav =data.Tcount[24];
       this.Svav =data.Scount[24];
     
     
      })




  }

}


