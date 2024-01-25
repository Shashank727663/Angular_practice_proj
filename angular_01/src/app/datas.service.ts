import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WebFramework } from './FramWork';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatasService {
  private _url: string = 'assets/data/Frameworks.json';

  constructor(private http: HttpClient) {}

  errorHandler(error: any) {
    console.error('Error:', error);
    return throwError(error);
  }

  getFrameworkData(): Observable<WebFramework[]> {
    return this.http.get<WebFramework[]>(this._url).pipe(
      catchError((error) => this.errorHandler(error))
    );
  }
}
