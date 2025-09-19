import { Component, inject, signal, Type } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe, NgComponentOutlet } from '@angular/common';
import { FORM_CONFIG } from '../../mocks/forms.mocks';
import { mapValidators } from '../../utils/dynamic-forms.utils';
import { InputComponent } from '../controls/input.component';
import { SelectComponent } from '../controls/select.component';
import { CheckboxComponent } from '../controls/checkbox.component';
import { MatButtonModule } from '@angular/material/button';
import { DynamicFormsService } from '../../services/dynamic-forms.service';
import { FieldConfig } from '../../model/forms';

@Component({
  selector: 'app-df-version01',
  imports: [
    NgComponentOutlet,
    ReactiveFormsModule,
    InputComponent,
    SelectComponent,
    CheckboxComponent,
    MatButtonModule,
    AsyncPipe,
  ],
  templateUrl: './df-version01.component.html',
  styleUrl: './../../styles/dynamic-forms.scss',
})
export class DfVersion01Component {
  private readonly fb = inject(FormBuilder);
  private readonly dynamicFormsService = inject(DynamicFormsService);

  protected config = signal<FieldConfig[] | null>(null);
  protected isFormLoaded = signal(false);
  protected form!: FormGroup;
  protected displayForm: Promise<Type<unknown>> | null = null;

  protected loadForm(): void {
    const form = FORM_CONFIG;
    this.config.set([...form]);
    this.getDynamicForm();
    this.getDisplayForms();
    this.isFormLoaded.update((val) => !val);
  }

  private getDynamicForm(): void {
    const group: Record<string, any> = {};
    this.config()!.forEach((field) => {
      group[field.name] = ['', mapValidators(field.validators)];
    });
    this.form = this.fb.group(group);
  }

  private getDisplayForms(): void {
    this.displayForm = this.dynamicFormsService.getDisplayForms();
  }
}
