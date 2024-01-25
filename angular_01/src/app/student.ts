export class Student {
    public id: number;
  public firstName: string;
  public lastName: string;
  public age: number;
  public grade: string;

  constructor(id: number, firstName: string, lastName: string, age: number, grade: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.grade = grade;
  }
}
