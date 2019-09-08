import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ngsample-header></ngsample-header>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
