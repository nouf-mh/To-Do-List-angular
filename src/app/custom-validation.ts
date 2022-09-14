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

  // const nameRe = /bob/i;
  //
  // if (forbidden) {
  //   control.setErrors(Object.assign((control.errors ? control.errors : {}), {custom: true}));
  // } else {
  //   control.setErrors(control.errors);
  // }

  // this.el.nativeElement.classList.remove("is-valid");
  // this.el.nativeElement.classList.remove("in-valid");
  // if (control.valid) {
  //   this.el.nativeElement.classList.add("is-valid");
  // } else {
  //   this.el.nativeElement.classList.add("in-valid");
  // }
}
