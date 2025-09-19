import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: true,
  template: `<p>🙌 Welcome from CDK Portal!</p>`,
})
class WelcomeComponent {}

@Component({
  selector: 'app-goodbye',
  standalone: true,
  template: `<p>👋 Goodbye from CDK Portal!</p>`,
})
class GoodbyeComponent {}

import { CommonModule } from '@angular/common';
import {
  CdkPortalOutlet,
  ComponentPortal,
  PortalModule,
  TemplatePortal,
} from '@angular/cdk/portal';

@Component({
  selector: 'app-cdk-portal-demo',
  standalone: true,
  imports: [CommonModule, PortalModule],
  template: `
    <button (click)="showComponent('welcome')">Show Welcome Component</button>
    <button (click)="showComponent('goodbye')">Show Goodbye Component</button>
    <button (click)="showTemplate()">Show Template Portal</button>

    <div class="portal-container">
      <ng-template cdkPortalOutlet></ng-template>
    </div>

    <!-- Template portal -->
    <ng-template #tpl>
      <p>📌 This is rendered from a TemplatePortal!</p>
    </ng-template>
  `,
})
export class CdkPortalDemo {
  //@ts-ignore
  @ViewChild(CdkPortalOutlet, { static: true }) outlet!: CdkPortalOutlet;
  //@ts-ignore
  @ViewChild('tpl') tplPortal!: any;

  showComponent(type: 'welcome' | 'goodbye') {
    const portal = new ComponentPortal(
      type === 'welcome' ? WelcomeComponent : GoodbyeComponent
    );
    this.outlet.attach(portal);
  }

  showTemplate() {
    //passing null here coz we already have the outlet.
    const portal = new TemplatePortal(this.tplPortal, null!);
    this.outlet.attach(portal);
  }
}
