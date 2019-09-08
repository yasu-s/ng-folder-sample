import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Header
 */
@Component({
  selector: 'ngsample-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
