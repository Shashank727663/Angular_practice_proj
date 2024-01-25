import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {



  getCourses(){
    return [
      {
        "id": 1,
        "name": "Angular",
        "description": "Angular is a platform for building mobile and desktop web applications.",
        "author": "Google",
        "isTopRated": true
      },
      {
        "id": 2,
        "name": "React",
        "description": "React is an open-source, front end, JavaScript library for building user interfaces or UI components.",
        "author": "Facebook",
        "isTopRated": false
      },
      {
        "id": 3,
        "name": "Vue",
        "description": "Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications.",
        "author": "Evan You",
        "isTopRated": true
      }
    ];
  }
  constructor() { 

  }
}
