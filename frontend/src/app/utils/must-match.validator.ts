import { FormGroup } from '@angular/forms';

export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    // return null if any one of them is not initalized
    if (!control || !matchingControl) {
      return null;
    }

    // return null if another validator has already found an error on the matching control.
    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      return null;
    }

    // set error on matchingcontrol if validation fails.

    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}
