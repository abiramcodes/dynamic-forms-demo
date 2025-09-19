import { Component, Input } from '@angular/core';
import { CommonModule, NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-hello',
  standalone: true,
  template: `<p>Hello {{ name }} 👋</p>`,
})
export class HelloComponent {
  @Input() name = 'Guest';
}

@Component({
  selector: 'app-bye',
  standalone: true,
  template: `<p>Bye {{ name }} 👋</p>`,
})
export class ByeComponent {
  @Input() name = 'Guest';
}

@Component({
  selector: 'app-ng-component-outlet-demo',
  standalone: true,
  imports: [CommonModule, NgComponentOutlet],
  template: `
    <button (click)="current = HelloComponent">Show Hello</button>
    <button (click)="current = ByeComponent">Show Bye</button>

    <!-- Dynamically render component -->
    <ng-container
      [ngComponentOutlet]="current"
      [ngComponentOutletInputs]="{ name: 'Angular Meetup' }"
    >
    </ng-container>
  `,
})
export class NgComponentOutletDemo {
  HelloComponent = HelloComponent;
  ByeComponent = ByeComponent;
  current = this.HelloComponent;
}
