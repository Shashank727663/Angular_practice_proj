import { Component } from '@angular/core';
import {CoursesService} from '../courses.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  public courses : { id: number; name: string; description: string; author: string; isTopRated: boolean; }[] = [];
  constructor(private _courseService : CoursesService) { }
  ngOnInit() {
    this.courses = this._courseService.getCourses();
  }
}
