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

 getTutorList(){
  return this.http.get("https://guarded-beyond-19031.herokuapp.com/search ");
 }

 blockUsers(){
   return this.http.get("https://guarded-beyond-19031.herokuapp.com/block");
 }

 unblockUsers(){
  return this.http.get("https://guarded-beyond-19031.herokuapp.com/unblock");
}

 blockTutorList(){
  return this.http.get("https://guarded-beyond-19031.herokuapp.com/blockList ");  
 }

 writeNews(){
   return this.http.get("https://guarded-beyond-19031.herokuapp.com/insertNews");
 }

 viewNews(){
   return this.http.get("https://guarded-beyond-19031.herokuapp.com/getNews");
 }

 boostOffer(){
  return this.http.get("https://guarded-beyond-19031.herokuapp.com/addBoostOffer");
 }


}
