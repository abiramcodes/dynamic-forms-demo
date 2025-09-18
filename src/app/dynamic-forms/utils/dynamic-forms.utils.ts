import { Validators } from '@angular/forms';
import { ValidatorType } from '../model/forms';

export function mapValidators(
  validators?: ValidatorType[]
): Partial<Validators[]> | undefined {
  if (!validators) return;

  return validators.map((v) => {
    switch (v) {
      case 'email':
        return Validators.email;
      case 'required':
        return Validators.required;
      case 'requiredTrue':
        return Validators.requiredTrue;
    }
  });
}
