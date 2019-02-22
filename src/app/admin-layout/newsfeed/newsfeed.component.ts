import { Component, OnInit } from '@angular/core';
import {News} from '../modle/news.model'
import { AdminServiceService } from '../../services/admin-service.service';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss']
})

export class NewsfeedComponent  {
  news: News= new News();

  constructor(
    private Newsfeed : AdminServiceService
  ){


  }
  createNews(){

    console.log(this.news);
this.Newsfeed.writeNews(this.news)

.subscribe( res => {

  window.alert("Success")
})

  }

}
