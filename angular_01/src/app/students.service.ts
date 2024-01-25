import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class StudentsService {
  constructor() {}

  getStudents() {
    return [
      {
        "id": 1,
        "firstName": "John",
        "lastName": "Doe",
        "age": 20,
        "grade": "A"
      },
      {
        "id": 2,
        "firstName": "Jane",
        "lastName": "Smith",
        "age": 22,
        "grade": "B"
      },
      {
        "id": 3,
        "firstName": "Bob",
        "lastName": "Johnson",
        "age": 21,
        "grade": "A-"
      }
    ];
  }
}
