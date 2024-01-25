import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiResponse } from './NewsData';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private _url : string = 'https://newsapi.org/v2/everything?q=tesla&from=2023-12-24&sortBy=publishedAt&apiKey=40c8955019f3444abd4af5ed3610ffb0'
  constructor(private http: HttpClient) { }
  errorHandler(error: any) {
    console.error('Error:', error);
    return throwError(error);
  }

  getNewsData(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this._url).pipe(
      catchError((error) => this.errorHandler(error))
    );
  }



}
