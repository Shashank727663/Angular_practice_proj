import { Component } from '@angular/core';
import { DatasService } from '../datas.Service';
import { WebFramework } from '../FramWork';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  public WebFramework: any[] = [];

  constructor(private _datasService: DatasService) {}

  ngOnInit() {
    this._datasService.getFrameworkData().subscribe((data: WebFramework[]) => {
      this.WebFramework = data;
    });
  }
}
