import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { InputField } from '../../model/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BaseControl } from '../../utils/base-control.utils';

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  template: `
    <ng-container [formGroup]="formGroup">
      <mat-form-field>
        <mat-label>{{ field().label }}</mat-label>
        <input
          [type]="field().inputType"
          matInput
          [formControlName]="controlName()"
        />
      </mat-form-field>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent extends BaseControl {
  field = input.required<InputField>();
  controlName = input.required<string>();
}
