import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchlocalService {

  constructor() { }
  // fetch data from the local storage
  getData() {
    return JSON.parse(localStorage.getItem('Students') as string);
  }

  // fetch from the local storage
  getContribution() {
    return JSON.parse(localStorage.getItem('contribution') as string);
  }
  

}
