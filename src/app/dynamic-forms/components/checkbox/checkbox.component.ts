import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CheckboxField } from '../../model/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-checkbox',
  imports: [ReactiveFormsModule, MatCheckboxModule],
  template: `
    <mat-checkbox [formControl]="control()">{{ field().label }}</mat-checkbox>
  `,
  styleUrl: './checkbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent {
  field = input.required<CheckboxField>();
  control = input.required<FormControl>();
}
