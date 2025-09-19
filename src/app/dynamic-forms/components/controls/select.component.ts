import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectField } from '../../model/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BaseControl } from '../../utils/base-control.utils';

@Component({
  selector: 'app-select',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatSelectModule],
  template: `
    <ng-container [formGroup]="formGroup">
      <mat-form-field>
        <mat-label> {{ field().label }} </mat-label>
        <mat-select [formControlName]="controlName()">
          @for (option of field().options; track $index) {
          <mat-option [value]="option">{{ option }}</mat-option>
          }
        </mat-select>
      </mat-form-field>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent extends BaseControl {
  field = input.required<SelectField>();
  controlName = input.required<string>();
}
