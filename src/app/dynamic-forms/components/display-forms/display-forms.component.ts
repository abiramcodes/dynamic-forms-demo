import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-display-forms',
  imports: [JsonPipe],
  template: `
    @if (showForm()) {
    <h4>Form Value :</h4>
    <pre>{{ form().value | json }}</pre>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayFormsComponent {
  form = input.required<FormGroup>();
  showForm = input.required<boolean>();
}
