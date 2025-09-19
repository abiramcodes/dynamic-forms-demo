import { Component, inject, signal, Type } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe, NgComponentOutlet } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FORM_CONFIG } from '../../mocks/forms.mocks';
import { DynamicFormsService } from '../../services/dynamic-forms.service';
import { mapValidators } from '../../utils/dynamic-forms.utils';
import { FieldConfig } from '../../model/forms';

@Component({
  selector: 'app-df-version02',
  imports: [NgComponentOutlet, ReactiveFormsModule, AsyncPipe, MatButtonModule],
  templateUrl: './df-version02.component.html',
  styleUrl: './../../styles/dynamic-forms.scss',
})
export class DfVersion02Component {
  private readonly fb = inject(FormBuilder);
  private readonly dynamicFormsService = inject(DynamicFormsService);

  protected config = signal<FieldConfig[] | null>(null);
  protected isFormLoaded = signal(false);
  protected form!: FormGroup;
  protected fieldComponents: Promise<Type<unknown>>[] = [];
  protected displayForm: Promise<Type<unknown>> | null = null;

  protected loadForm(): void {
    const form = FORM_CONFIG;
    this.config.set([...form]);
    this.getDynamicForm();
    this.getDisplayForms();
    this.isFormLoaded.update((val) => !val);
  }

  private getDynamicForm(): void {
    const group: Record<string, any[]> = {};
    this.config()!.forEach((field, index) => {
      group[field.name] = ['', mapValidators(field.validators)];
      this.fieldComponents[index] =
        this.dynamicFormsService.lazyLoadForms(field);
    });
    this.form = this.fb.group(group);
  }

  private getDisplayForms(): void {
    this.displayForm = this.dynamicFormsService.getDisplayForms();
  }
}
