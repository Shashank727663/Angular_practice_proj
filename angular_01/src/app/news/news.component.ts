import { Component } from '@angular/core';
import { NewsService } from '../news.service';
import { ApiResponse } from '../NewsData';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
    public ApiResponse : ApiResponse | undefined;
    constructor(private _newsService : NewsService) { }
    
    ngOnInit(){
      this._newsService.getNewsData().subscribe((data : ApiResponse) => {
        this.ApiResponse = data;
      }, (error) => {
        console.log(error);
      } );
    }
}
