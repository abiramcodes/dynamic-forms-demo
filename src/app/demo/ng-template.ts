import { Component } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-ng-template',
  imports: [NgTemplateOutlet],
  template: `
    <button (click)="view = 'welcome'">Show Welcome</button>
    <button (click)="view = 'goodbye'">Show Goodbye</button>

    <!-- Dynamically render a template -->
    <ng-container
      [ngTemplateOutlet]="view === 'welcome' ? welcomeTpl : goodbyeTpl"
      [ngTemplateOutletContext]="context"
    >
    </ng-container>

    <!-- Templates -->
    <ng-template #welcomeTpl let-name="name">
      <p>👋 Welcome, {{ name }}!</p>
    </ng-template>

    <ng-template #goodbyeTpl let-name="name">
      <p>👋 Goodbye, {{ name }}. See you next time!</p>
    </ng-template>
  `,
})
export class NgTemplateOutletDemo {
  view: 'welcome' | 'goodbye' = 'welcome';
  context = {
    name: 'Angular Meetup',
  };
}
