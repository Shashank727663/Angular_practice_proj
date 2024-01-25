import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from './Peaky';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PeakyBlindersService {

  constructor(private http : HttpClient) { }
  private _url : string = 'https://peaky-blinders.calmsand-ff14fe59.eastus.azurecontainerapps.io/api/seasons/'


  errorHandler(error: any) {
    console.error('Error:', error);
    return throwError(error);
  }
  

  getPeakyBlindersData(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this._url).pipe(
      catchError((error) => this.errorHandler(error))
    );
  }
}
