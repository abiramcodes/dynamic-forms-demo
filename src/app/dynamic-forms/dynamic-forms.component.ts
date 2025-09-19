import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dynamic-forms',
  imports: [RouterOutlet],
  template: ` <router-outlet /> `,
})
export class DynamicFormsComponent {}
