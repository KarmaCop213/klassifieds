import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'

export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const passwordControl = control.get('password')
  const confirmPasswordControl = control.get('confirmPassword')

  if (!passwordControl || !confirmPasswordControl || passwordControl.value === confirmPasswordControl.value) {
    if (confirmPasswordControl?.errors?.confirmPasswordValidator !== undefined) {
      delete confirmPasswordControl.errors.confirmPasswordValidator
      if (
        confirmPasswordControl.errors &&
        Object.keys(confirmPasswordControl.errors).length === 0 &&
        Object.getPrototypeOf(confirmPasswordControl.errors) === Object.prototype
      ) {
        confirmPasswordControl.setErrors(null)
      }
    }
    return null
  }

  confirmPasswordControl.setErrors({ confirmPasswordValidator: true })
  return { confirmPasswordValidator: true }
}
