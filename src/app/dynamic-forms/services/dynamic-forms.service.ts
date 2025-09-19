import { Injectable, Type } from '@angular/core';
import { FieldConfig } from '../model/forms';

type ComponentLoader<T extends string> = Map<T, Promise<Type<unknown>>>;

@Injectable({
  providedIn: 'root',
})
export class DynamicFormsService {
  private cmpMap: ComponentLoader<'input' | 'select' | 'checkbox'> = new Map();

  public async lazyLoadForms(field: FieldConfig): Promise<Type<unknown>> {
    const fieldType = field.type;

    if (!this.cmpMap.has(fieldType)) {
      switch (fieldType) {
        case 'input':
          this.cmpMap.set(
            fieldType,
            import('./../components/input/input.component').then(
              (c) => c.InputComponent
            )
          );
          break;
        case 'checkbox':
          this.cmpMap.set(
            fieldType,
            import('./../components/checkbox/checkbox.component').then(
              (c) => c.CheckboxComponent
            )
          );
          break;
        case 'select':
          this.cmpMap.set(
            fieldType,
            import('./../components/select/select.component').then(
              (c) => c.SelectComponent
            )
          );
          break;
      }
    }
    return this.cmpMap.get(fieldType) as Promise<Type<unknown>>;
  }

  public async getDisplayForms(): Promise<Type<unknown>> {
    const { DisplayFormsComponent } = await import(
      './../components/display-forms/display-forms.component'
    );
    return DisplayFormsComponent;
  }
}
