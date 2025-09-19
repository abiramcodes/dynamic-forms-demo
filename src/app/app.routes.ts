import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./dynamic-forms/dynamic-forms.component').then(
        (c) => c.DynamicFormsComponent
      ),
  },
  {
    path: 'dynamicForms/v1',
    loadComponent: () =>
      import(
        './dynamic-forms/components/df-version01/df-version01.component'
      ).then((c) => c.DfVersion01Component),
  },
  {
    path: 'dynamicForms/v2',
    loadComponent: () =>
      import(
        './dynamic-forms/components/df-version02/df-version02.component'
      ).then((c) => c.DfVersion02Component),
  },
];
