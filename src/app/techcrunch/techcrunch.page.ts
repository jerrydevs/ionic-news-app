import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-techcrunch',
  templateUrl: './techcrunch.page.html',
  styleUrls: ['./techcrunch.page.scss'],
})
export class TechcrunchPage implements OnInit {
  articles;

  constructor(private apiService: ApiService) { }

  ionViewDidEnter() {
    this.apiService.getNews('techcrunch').subscribe(data => {
      console.log(data);
      this.articles = data['articles']
    })
  }
  
  ngOnInit() {
  }

}
