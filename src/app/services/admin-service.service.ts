import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(
    private http: Http
  ) { }


  adminData(){
    return this.http.get("https://guarded-beyond-19031.herokuapp.com/adminDash");
  }
  
 tcount(){

  return this.http.get("https://guarded-beyond-19031.herokuapp.com/subjectCount");

 }

 districtwise(){
  return this.http.get("https://guarded-beyond-19031.herokuapp.com/districtCount");


 }

}
