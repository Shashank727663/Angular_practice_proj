import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContributeService {
private _url : string = 'http://localhost:3000/register'
  constructor(private _http : HttpClient) {
   }

    errorHandler(error: any) {
      console.error('Error:', error);
      return throwError(error);

}

contributeData(data : any) : Observable<any> {
  // also saving the data to local storage 
  localStorage.setItem('contribution', JSON.stringify(data));
  console.log(localStorage.getItem('contribution'));
  return this._http.post<any>(this._url , data).pipe(
    catchError((error) => this.errorHandler(error))
  );
}

}