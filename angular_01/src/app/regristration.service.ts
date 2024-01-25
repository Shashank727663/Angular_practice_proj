import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ListComponent } from './list/list.component';
@Injectable({
  providedIn: 'root'
})
export class RegristrationService {

  constructor(private http : HttpClient) { }
  addStudent(student: Student, students: Student[]) {
    if(localStorage.getItem('Students')) {
      students = JSON.parse(localStorage.getItem('Students') as string);
      students = [student, ...students];
    } else {
      students = [student];
    }
    localStorage.setItem('Students', JSON.stringify(students));
  }
  private _url : string = 'http://localhost:3000/register'
  Register(student : Student): Observable<any> {
    return this.http.post<any>(this._url , student).pipe(map((res:any) => {
      return res;
    }));
  }
}
