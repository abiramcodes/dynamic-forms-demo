import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormsService } from './services/dynamic-forms.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dynamic-forms',
  imports: [JsonPipe, MatButtonModule],
  templateUrl: './dynamic-forms.component.html',
  styleUrl: './dynamic-forms.component.scss',
})
export class DynamicFormsComponent {
  public readonly dynamicFormsService = inject(DynamicFormsService);
  form!: FormGroup;

  protected loadForm(): void {
    console.log('form loading yet to be developed');
  }
}
