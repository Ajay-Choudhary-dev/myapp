import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Password strength checking function
function passwordStrength(password: string): { [key: string]: boolean } | null {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const isLengthValid = password.length >= 8;

  const strengthLevel = (hasUpperCase ? 1 : 0) +
                        (hasLowerCase ? 1 : 0) +
                        (hasNumbers ? 1 : 0) +
                        (hasSpecialChars ? 1 : 0);

  return strengthLevel < 3 ? { weak: true } : null; // Weak if less than 3 criteria met
}

export function PasswordMatchValidator(controlName: string, matchingControlName: string): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const control = formGroup.get(controlName);
    const matchingControl = formGroup.get(matchingControlName);

    if (control && matchingControl) {
      const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+={}\[\]:;"'<>,.?~`]{8,}$/; // Example pattern
      const passwordsMatch = control.value === matchingControl.value;
      const isValidPattern = pattern.test(control.value) && pattern.test(matchingControl.value);
      const strengthErrors = passwordStrength(control.value);

      if (!passwordsMatch) {
        matchingControl.setErrors({ mismatch: true });
      } else if (!isValidPattern) {
        matchingControl.setErrors({ invalidPattern: true });
      } else if (strengthErrors) {
        matchingControl.setErrors(strengthErrors);
      } else {
        matchingControl.setErrors(null);
      }
    }
    
    return null;
  };
}
