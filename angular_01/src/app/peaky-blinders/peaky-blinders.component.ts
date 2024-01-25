// peaky-blinders.component.ts

import { Component, OnInit } from '@angular/core';
import { PeakyBlindersService } from '../peaky-blinders.service';
import { ApiResponse } from '../Peaky';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-peaky-blinders',
  templateUrl: './peaky-blinders.component.html',
  styleUrls: ['./peaky-blinders.component.css']
})
export class PeakyBlindersComponent implements OnInit {
  public ApiResponse: ApiResponse | undefined;

  constructor(private _peakyService: PeakyBlindersService) { }

  ngOnInit() {
    this._peakyService.getPeakyBlindersData().subscribe(
      (data: ApiResponse) => {
        this.ApiResponse = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
