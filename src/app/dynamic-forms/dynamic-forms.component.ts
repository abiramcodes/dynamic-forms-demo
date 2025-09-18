import { AsyncPipe, JsonPipe, NgComponentOutlet } from '@angular/common';
import { Component, inject, OnInit, signal, Type } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormsService } from './services/dynamic-forms.service';
import { MatButtonModule } from '@angular/material/button';
import { mapValidators } from './utils/dynamic-forms.utils';
import { FORM_CONFIG } from './mocks/forms';

@Component({
  selector: 'app-dynamic-forms',
  imports: [
    JsonPipe,
    MatButtonModule,
    ReactiveFormsModule,
    NgComponentOutlet,
    AsyncPipe,
  ],
  templateUrl: './dynamic-forms.component.html',
  styleUrl: './dynamic-forms.component.scss',
})
export class DynamicFormsComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly dynamicFormsService = inject(DynamicFormsService);

  protected readonly config = signal(FORM_CONFIG);
  protected isFormLoaded = signal(false);
  protected form!: FormGroup;
  protected fieldComponents: Promise<Type<unknown>>[] = [];

  ngOnInit(): void {
    this.getDynamicForm();
  }

  private getDynamicForm(): void {
    const group: Record<string, any[]> = {};
    this.config().forEach((field, index) => {
      group[field.name] = ['', mapValidators(field.validators)];
      this.fieldComponents[index] =
        this.dynamicFormsService.lazyLoadForms(field);
    });
    this.form = this.fb.group(group);
  }

  protected loadForm(): void {
    const form = FORM_CONFIG;
    this.config.set([...form]);
    this.isFormLoaded.update((val) => !val);
  }
}
