import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsDataService {
  server = "https://newsapi.org/v2/top-headlines?country=us&apiKey=9657fa65b63d41d5b1a0d2ad336a1d9e&category=";
  constructor(private http: HttpClient) { }

  getNews(categoryName: string) {
    return this.http.get(this.server + categoryName);
  }
}
