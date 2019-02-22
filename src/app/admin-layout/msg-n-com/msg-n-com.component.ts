import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-msg-n-com',
  templateUrl: './msg-n-com.component.html',
  styleUrls: ['./msg-n-com.component.scss']
})
export class MsgNComComponent implements OnInit {

msgs = [];

  constructor(
    private http: Http
  ) { }

  ngOnInit() {
    this.http.get("https://guarded-beyond-19031.herokuapp.com/viewAllSuggestions")
      .subscribe(res=>{
        this.msgs = res.json().suggestions;
      })
  }

}
