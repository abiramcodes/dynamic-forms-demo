export type ValidatorType = 'required' | 'email' | 'requiredTrue';

interface BaseField {
  type: string;
  label: string;
  name: string;
  validators?: ValidatorType[];
}

export interface InputField extends BaseField {
  type: 'input';
  inputType: 'text' | 'email' | 'number';
}

export interface SelectField extends BaseField {
  type: 'select';
  options: string[];
}

export interface CheckboxField extends BaseField {
  type: 'checkbox';
}

export type FieldConfig = InputField | SelectField | CheckboxField;
