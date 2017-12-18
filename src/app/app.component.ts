import { Component } from '@angular/core';
import { Article } from "./article/article.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'app';

  articles:Article[];

  constructor(){
    this.articles = [
      new Article('Angular 1','http://angular.io',10),
      new Article('Angular 2','http://angular.io',20),
      new Article('Angular 4','http://angular.io',30),
      new Article('Angular 5','http://angular.io',40),

    ];
  }
  addArticle(title:HTMLInputElement,link:HTMLInputElement):boolean{

    this.articles.push(new Article(title.value,link.value,0));
    title.value='';
    link.value='';
    console.log(`Adding Article with title: ${title.value} and link :${link.value}`);
    return false;

  }

  sortedArticles():Article[]{
    return this.articles.sort((a:Article,b:Article)=>b.votes-a.votes);
  }
}
