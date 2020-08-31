import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-arstechnica',
  templateUrl: './arstechnica.page.html',
  styleUrls: ['./arstechnica.page.scss'],
})
export class ArstechnicaPage implements OnInit {
  articles;

  constructor(private apiService: ApiService) { }

  ionViewDidEnter() {
    this.apiService.getNews('arstechnica').subscribe(data => {
      console.log(data);
      this.articles = data['articles']
    })
  }
  ngOnInit() {
  }

}
