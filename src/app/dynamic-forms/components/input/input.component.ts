import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { InputField } from '../../model/forms';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  template: `
    <mat-form-field>
      <mat-label>{{ field().label }}</mat-label>
      <input [type]="field().inputType" matInput [formControl]="control()" />
    </mat-form-field>
  `,
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  field = input.required<InputField>();
  control = input.required<FormControl>();
}
