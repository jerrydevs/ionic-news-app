import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // 67283b61494b405e92b18db3a3dba152
  API_KEY = 'e40d07f00b094602953cc3bf8537477e';

  constructor(private httpClient: HttpClient) {}

  getNews(source) {
    if (source === 'techcrunch') {
      return this.httpClient.get(
        `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`
      );
    } else if (source === 'arstechnica') {
      return this.httpClient.get(
        `https://newsapi.org/v2/top-headlines?sources=ars-technica&apiKey=${this.API_KEY}`
      );
    }
  }
}
