import { Component, OnInit } from '@angular/core';
import { NewsService } from '../shared/news/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  news: Array<any> = []; 

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getAll().subscribe(data => {
      this.news = data;
    });
  }
}