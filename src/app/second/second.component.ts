import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {


  constructor(private titleService: Title ,private meta: Meta) { 
    this.meta.addTags([
      { name: 'og:url', content: 'https://9172-1-22-101-13.ngrok.io/secondcomponent' },
      { name: 'og:titla', content: 'A Twitter for My second component' },
      { name: 'og:description', content: 'A Twitter for My second component' },
      { name: 'og:image', content: 'http://graphics8.nytimes.com/images/2011/12/08/technology/bits-newtwitter/bits-newtwitter-tmagArticle.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'A Twitter for My second component' },
      { name: 'twitter:description', content: 'A Twitter for My second component' },
      { name: 'twitter:image', content: 'http://graphics8.nytimes.com/images/2011/12/08/technology/bits-newtwitter/bits-newtwitter-tmagArticle.jpg' }
      

    ],true);
  }

  
  ngOnInit(): void {
    this.setTitle("Second Component")
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
