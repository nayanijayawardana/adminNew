import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-boostoffer',
  templateUrl: './boostoffer.component.html',
  styleUrls: ['./boostoffer.component.scss']
})
export class BoostofferComponent implements OnInit {

  constructor(
    private http: Http
  ) { }

  ngOnInit() {
  }

  discount;
  days;
  package;

  onSubmit() {
    this.http.post("https://guarded-beyond-19031.herokuapp.com/addBoostOffer", {
      'package': this.package,
      'discount': this.discount,
      'duration': this.days
    }).subscribe(res => {
      console.log(res.json());
    })
  }

}
