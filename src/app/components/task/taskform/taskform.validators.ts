//login.validator.ts
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

//Ejemplo estructura función
export function customValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let valorCampo = control.value
    let expireDate = new Date(valorCampo);
    let today = new Date();

    if(expireDate >= today){
        return null;
    }else{
        return  { invalidDate: true };
    }

  };
}

export function customvalidatorPriority(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let valorCampo:string = control.value

    if(valorCampo == 'H' || valorCampo == 'M' || valorCampo == 'L'){
        return null;
    }else{
        return  { invalidPriority: true};
    }
  };



}
