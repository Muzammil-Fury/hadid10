import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private titleService: Title ,private meta: Meta) { 
    this.meta.addTags([
      { name: 'og:url', content: 'https://9172-1-22-101-13.ngrok.io/firstcomponent' },
      { name: 'og:titla', content: 'A Twitter for My first component' },
      { name: 'og:description', content: 'A Twitter for My first component' },
      { name: 'og:image', content: 'http://graphics8.nytimes.com/images/2011/12/08/technology/bits-newtwitter/bits-newtwitter-tmagArticle.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' }
    ],true);
   }

  
  ngOnInit(): void {
    this.setTitle("First Component")
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
