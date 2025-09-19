import { FieldConfig } from '../model/forms';

export const FORM_CONFIG: FieldConfig[] = [
  {
    type: 'input',
    label: 'Name',
    name: 'name',
    inputType: 'text',
    validators: ['required'],
  },
  {
    type: 'input',
    label: 'Email',
    name: 'email',
    inputType: 'email',
    validators: ['required', 'email'],
  },
  {
    type: 'select',
    label: 'Country',
    name: 'country',
    options: ['Chennai', 'Bangalore', 'Delhi'],
    validators: ['required'],
  },
  {
    type: 'checkbox',
    label: 'Accept Terms',
    name: 'terms',
    validators: ['requiredTrue'],
  },
];
