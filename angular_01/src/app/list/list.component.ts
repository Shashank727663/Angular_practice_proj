import { Component } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public students: { id: number; firstName: string; lastName: string; age: number; grade: string; }[] = [];

  constructor(private _studentsService : StudentsService) {}

  ngOnInit() {
    this.students = this._studentsService.getStudents();
  }
}
