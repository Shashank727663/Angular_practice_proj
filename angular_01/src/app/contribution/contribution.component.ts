import { Component } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder , Validators} from '@angular/forms';
import { ForbiddenNameValidator , PasswordValidator } from '../shared/user-name.validator';
import { ContributeService } from '../contribute.service';
@Component({
  selector: 'app-contribution',
  templateUrl: './contribution.component.html',
  styleUrls: ['./contribution.component.css']
})
export class ContributionComponent {
  // ContributionForm = new FormGroup({
  //   Name: new FormControl('John Doe'),
  //   Description: new FormControl(''),
  //   Website: new FormControl(''),
  // });

  constructor(private fb: FormBuilder , private _conservice  :ContributeService ) { }

  ContributionForm = this.fb.group({
    Name: ['', [Validators.required,Validators.minLength(4), ForbiddenNameValidator]],
    Description: ['', [Validators.required , Validators.minLength(10) , PasswordValidator]],
    Website: ['', Validators.required ]
  });

  
  loadData() {
    this.ContributionForm.setValue({
      Name: 'John Doe',
      Description: 'This is a test description',
      Website: 'https://www.google.com/'
    })
  }

  onSubmit() {

    console.log(this.ContributionForm.value)
    this._conservice.contributeData(this.ContributionForm.value).subscribe(
      data => console.log('data set' , data),
      error => console.error('Error' , error)
    );
  }

}
