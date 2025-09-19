import { inject } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

export class BaseControl {
  private readonly parentFormGroup = inject(ControlContainer);

  get formGroup() {
    return this.parentFormGroup.control as FormGroup;
  }
}
