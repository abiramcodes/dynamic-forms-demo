import { JsonPipe } from '@angular/common';
import { Component, input } from '@angular/core';
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
})
export class DisplayFormsComponent {
  form = input.required<FormGroup>();
  showForm = input.required<boolean>();
}
