import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { News } from '../admin-layout/modle/news.model';
import {ViewT} from '../admin-layout/modle/viewT.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(
    private http: HttpClient,
    private httpp : Http
    
  ) { }
  


  adminData(){
    return this.httpp.get("https://guarded-beyond-19031.herokuapp.com/adminDash");
  }
  
 tcount(){
  return this.httpp.get("https://guarded-beyond-19031.herokuapp.com/subjectCount");
 }

 districtwise(){
  return this.httpp.get("https://guarded-beyond-19031.herokuapp.com/districtCount");
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

 writeNews(news):Observable<any>{
   return this.http.post<News>("https://guarded-beyond-19031.herokuapp.com/insertNews",news);
 }

 viewNews(){
   return this.http.get("https://guarded-beyond-19031.herokuapp.com/getNews");
 }

 boostOffer(){
  return this.http.get("https://guarded-beyond-19031.herokuapp.com/addBoostOffer");
 }

 viewTutor(viewt):Observable<any>{
  return this.http.post<ViewT>("https://guarded-beyond-19031.herokuapp.com/search",viewt);
 }



}
