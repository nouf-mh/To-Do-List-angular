import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export function customValidationFunction(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    if (forbidden) {
      control.setErrors(
        Object.assign(control.errors ? control.errors : {}, { custom: true })
      );
    } else {
      control.setErrors(control.errors);
    }
    return forbidden ? {forbidden:true} : null;
  };
}
