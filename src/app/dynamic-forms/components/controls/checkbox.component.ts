import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxField } from '../../model/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BaseControl } from '../../utils/base-control.utils';

@Component({
  selector: 'app-checkbox',
  imports: [ReactiveFormsModule, MatCheckboxModule],
  template: `
    <ng-container [formGroup]="formGroup">
      <mat-checkbox [formControlName]="controlName()">{{
        field().label
      }}</mat-checkbox>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent extends BaseControl {
  field = input.required<CheckboxField>();
  controlName = input.required<string>();
}
