import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsDataService } from 'src/app/Services/NewsData/news-data.service';
@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  newses: any;
  article: any;
  category: any
  constructor(private route: ActivatedRoute, private newsList: NewsDataService) {

  }

  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get('category');
    this.newsList.getNews(this.category).subscribe((data) => {
      this.newses = data;
      this.article = this.newses.articles;
      console.log(this.article)
    })
  }


}
