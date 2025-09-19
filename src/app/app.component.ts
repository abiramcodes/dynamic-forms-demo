import { Component, signal } from '@angular/core';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';

@Component({
  selector: 'app-root',
  imports: [ToolbarComponent, DynamicFormsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class App {}
