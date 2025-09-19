import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  imports: [MatToolbarModule, MatButtonModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {
  private readonly router = inject(Router);

  public navigateToRoute(path: 'v1' | 'v2' | 'home'): void {
    if (path === 'home') {
      this.router.navigate([`/home`]);
    } else {
      this.router.navigate([`/dynamicForms/${path}`]);
    }
  }
}
