import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SelectField } from '../../model/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-select',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatSelectModule],
  template: `
    <mat-form-field>
      <mat-label> {{ field().label }} </mat-label>
      <mat-select [formControl]="control()">
        @for (option of field().options; track $index) {
        <mat-option [value]="option">{{ option }}</mat-option>
        }
      </mat-select>
    </mat-form-field>
  `,
  styleUrl: './select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent {
  field = input.required<SelectField>();
  control = input.required<FormControl>();
}
