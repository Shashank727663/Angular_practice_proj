import { Component } from '@angular/core';
import {Student} from '../student';
import {RegristrationService} from '../regristration.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public ID = 5;
  public StudentModel = new Student(this.ID, '','Krishu',23,'');
  public GradeHasError = true;
  public click1 : boolean = false;
  public click2 : boolean = false;

  public grades = ['A','B','C','D','E','F'];
  constructor(private _registrationService : RegristrationService) { }
  validateGrade(value:any) {

    if(value === 'default') {
      this.GradeHasError = true;
    } else {
      this.GradeHasError = false;
    }
  }
  public HandleRegister() {
    this.click1 = !this.click1; 
  }

  public HandleContribute() {
    this.click2 = !this.click2;
  }

  public onSubmit() {
  
    console.log(this.StudentModel);
    this.ID = this.ID + 1;
    this.StudentModel.id = this.ID;
    this._registrationService.Register(this.StudentModel).subscribe(
      data => console.log('Success!', data),
      error => console.error('Error!', error)
    )
  }
  addStudent(student: Student) {
    let students: Student[] = [];
    if(localStorage.getItem('Students')) {
      students = JSON.parse(localStorage.getItem('Students') as string);
      students = [student, ...students];
    } else {
      students = [student];
    }
    localStorage.setItem('Students', JSON.stringify(students));
  }
}
