// custom validator to check that two fields match
import { AbstractControl, ValidatorFn } from '@angular/forms';
export function ForbiddenNameValidator(control : AbstractControl): {[key: string]: any} | null {
  const forbidden = /admin/.test(control.value);
  return forbidden ? {'forbiddenName': {value: control.value}} : null;

}

export function PasswordValidator(control : AbstractControl):{[key:string]:any} | null {
    const password = /password/.test(control.value);
    return password ? {'password':{value:control.value}}:null
}