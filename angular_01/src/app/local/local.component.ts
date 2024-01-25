import { Component } from '@angular/core';
import {FetchlocalService} from '../fetchlocal.service';
@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent {
  constructor(private _fetchlocal : FetchlocalService) { }

  public Students = this._fetchlocal.getData();
  public Contribution = this._fetchlocal.getContribution();

}
